import os
import json
import pandas as pd
from collections import OrderedDict
from xml.dom import minidom
import sys
sys.stdout.reconfigure(encoding='utf-8') # type: ignore
from file_manager import FileManager
from transcribe import Transcriber

class Code2Generator:
    ELECTION_VARIABLE_NAMES = (
        "states_json",
        "issues_json",
        "state_issue_score_json",
        "candidate_issue_score_json",
        "running_mate_issue_score_json",
    )
    SCENARIO_VARIABLE_NAMES = (
        "questions_json",
        "answers_json",
        "answer_score_global_json",
        "answer_score_issue_json",
        "answer_score_state_json",
        "answer_feedback_json",
        "candidate_state_multiplier_json"
    )
    
    def __init__(self, election_name: str, scenario_name: str):
        self.election_name = election_name
        self.scenario_name = scenario_name
        self.election_dir = os.path.join(os.pardir, election_name)
        self.scenario_dir = os.path.join(os.pardir, scenario_name)
        self.file_manager = FileManager()
        
    def generate(self):
        self.process_riding_data()
        code2 = self.join_sections()
        self.save_to_file(code2)

    def complete_map(self) -> str:
        ridings = self.file_manager.load_json(self.election_dir, "states.json")
        full_map = OrderedDict()
        for riding in ridings:
            full_map[riding["fields"]["abbr"]] = riding["d"]
        return json.dumps(full_map)

    def mapping_code(self) -> str:
        with open(os.path.join(self.election_dir, "mapping_code.txt"), "r", encoding="utf-8") as f:
            mapping_code_1 = f.readline().strip()
            mapping_code_2 = f.readline().strip()
        return mapping_code_1 + self.complete_map() + mapping_code_2
    
    def format_section(self, section: str, dir: str) -> str:
        section_name = section[:-5]
        section_filename = section_name + ".json"
        filepath = os.path.join(dir, section_filename)
        declaration = "campaignTrail_temp." + section + " = "
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                s = declaration + f.read().strip()
        except FileNotFoundError:
            s = declaration + "[]"
        return s

    def join_sections(self) -> str:
        sections = [self.mapping_code()]
        for section in self.ELECTION_VARIABLE_NAMES:
            sections.append(self.format_section(section, self.election_dir))
        for section in self.SCENARIO_VARIABLE_NAMES:
            sections.append(self.format_section(section, self.scenario_dir))
        end_code_filepath = os.path.join(self.scenario_dir, "end_code.js")
        with open(end_code_filepath, "r", encoding="utf-8") as f:
            sections.append(f.read())
        code2 = "\n\n".join(sections) + "\n"
        return code2
            
    def save_to_file(self, s: str):
        output_filepath = os.path.join(self.scenario_dir, self.scenario_name + ".html")
        with open(output_filepath, "w", encoding="utf-8") as f:
            f.write(s)
        
    def extract_geometry(self) -> pd.DataFrame:
        doc = minidom.parse(os.path.join(self.election_dir, "election_map_compressed_rearranged.svg"))
        path_geometries = [
            (
                path.getAttribute("inkscape:label"),
                path.getAttribute("d"),
            )
            for path in doc.getElementsByTagName('path')[:343]
        ]
        return pd.DataFrame(path_geometries, columns=("name", "d"))
    
    def extract_geometry_yapms(self) -> pd.DataFrame:
        doc = minidom.parse(os.path.join(self.election_dir, "yapms_map.svg"))
        path_geometries = []
        for group in doc.getElementsByTagName("g"):
            # Ridings described with multiple paths
            s = group.getAttribute("long-name").replace("—", "--").replace("’", "'")
            if s == "":
                continue
            d = ""
            for path in group.getElementsByTagName("path"):
                d += " M 0,0 " + path.getAttribute("d")
            d = d.strip()
            path_geometries.append((s, d))
        for path in doc.getElementsByTagName("path"):
            # Ridings described with a single path
            s = path.getAttribute("long-name").replace("—", "--").replace("’", "'")
            if s == "":
                continue
            path_geometries.append((s, path.getAttribute("d")))
            
        return pd.DataFrame(path_geometries, columns=("name", "d"))
    
    def extract_historical_results(self) -> pd.DataFrame:
        path = os.path.join(self.election_dir, "election_results.txt")
        df = pd.read_csv(path, sep='\t', header=1)
        df = df[df["Type of results*"] == "validated"]
        df = df.rename(columns={
            "Electoral district name": "name",
            "Political affiliation": "party",
            "% Votes obtained - Votes obtenus %": "share",
            "Total number of ballots cast - Nombre total de votes déposés": "votes",
        })
        df = df[["name", "party", "share", "votes"]]
        return df
    
    def extract_provinces(self) -> pd.DataFrame:
        states = pd.read_csv(os.path.join(self.election_dir, "constituencies.csv"))
        states["name"] = states["Constituency"].apply(lambda constituency: constituency.replace("—", "--"))
        states = states.rename(columns={"Province / Territory": "province"})
        return states[["name", "province"]]
    
    def extract_groupings(self) -> pd.DataFrame:
        states = self.extract_provinces().rename(columns={"province": "grouping"})
        all_group = states.copy()
        all_group = all_group.assign(grouping="all")
        states = pd.concat((all_group, states))
        
        i = len(states)
        groupings = self.file_manager.load_json(self.election_dir, "state_groupings.json")
        for grouping in groupings:
            name = grouping["name"]
            for state in grouping["states"]:
                states.loc[i] = [state, name]
                i += 1
        return states
    
    def check_ridings_match(self, results, geometry, groupings):
        results_ridings = set(results["name"])
        geometry_ridings = set(geometry["name"])
        grouping_ridings = set(groupings["name"])
        mismatch = results_ridings.union(geometry_ridings).difference(results_ridings.intersection(geometry_ridings))
        if len(mismatch) > 0:
            print("Warning: mismatch in ridings named in election results and map:", mismatch)
        mismatch = grouping_ridings.difference(results_ridings)
        if len(mismatch) > 0:
            print("Warning: riding name found in grouping but not in election results:", mismatch)
    
    def process_riding_data(self):
        results = self.extract_historical_results()
        geometry = self.extract_geometry()
        groupings = self.extract_groupings()
        self.check_ridings_match(results, geometry, groupings)
        vote_totals = results.groupby(["name"])["votes"].first()
        df = geometry.join(vote_totals, "name")
        df["state_pk"] = df.index + 343000
        
        parties = self.file_manager.load_json(self.election_dir, "candidates.json")
        parties_pks = {}
        for party in parties:
            parties_pks[party["name"]] = party["pk"]
        index = []
        for party in parties:
            for state_pk in df["state_pk"]:
                index.append((state_pk, party["pk"]))
                
        self.generate_states_json(df)
        self.generate_state_issue_score_json(df, results, parties)
        self.generate_questions_answers_jsons(df, groupings)      
        
        df = df[["name", "state_pk"]]
        df = df.set_index("name")
        df = results.join(df, "name")
        df["party_pk"] = df.apply(lambda row: parties_pks[row["party"]] if row["party"] in parties_pks else parties_pks["Others"], axis=1)
        df = df.groupby(["state_pk", "party_pk"])["share"].sum().reindex(index, fill_value=0).reset_index()
        self.generate_candidate_state_multiplier_json(df)
        
    def generate_questions_answers_jsons(self, df: pd.DataFrame, groupings: pd.DataFrame):
        state_name_to_pk = df.set_index("name").to_dict()["state_pk"]
        state_groupings = groupings.groupby("grouping")["name"].apply(list).T.to_dict()
        transcriber = Transcriber(self.scenario_name)
        transcriber.to_game_format(state_name_to_pk, state_groupings) # type: ignore as we ensure the types are correct elsewhere
        
    def generate_state_issue_score_json(self, df: pd.DataFrame, results: pd.DataFrame, parties: list):   
        state_issue_scores = []
        for issue in range(110, 115):
            results["issue_score"] = 0
            for party in parties:
                results["issue_score"] += (results["party"] == party["name"]).astype(int) * results["share"] / 100 * party["issues"][str(issue)]
            grouped = results.groupby(["name"])["issue_score"].sum()
            state_issue_scores.extend([
                {
                    "model": "campaign_trail.state_issue_score",
                    "pk": int(issue * 1000 + row["state_pk"] % 1000),
                    "fields": {
                        "state": int(row["state_pk"]),
                        "issue": issue,
                        "state_issue_score": grouped[row["name"]],
                        "weight": 1
                    }
                }
                for _, row in df.iterrows()
            ])
        results.drop("issue_score", axis=1)
        path = os.path.join(self.election_dir, "state_issue_score.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(state_issue_scores, f, indent=4, ensure_ascii=False)
        
    def generate_states_json(self, df: pd.DataFrame):
        POLL_CLOSING_TIMES = {
            "Newfoundland and Labrador": 10,
            "New Brunswick": 30,
            "Nova Scotia": 30,
            "Prince Edward Island": 30,
            "Quebec": 70,
            "Ontario": 70,
            "Manitoba": 70,
            "Saskatchewan": 70,
            "Alberta": 70,
            "Northwest Territories": 70,
            "Nunavut": 70,
            "British Columbia": 90,
            "Yukon": 90
        }
        provinces = self.extract_provinces().set_index("name").T.to_dict()
        states = [
            {
                "model": "campaign_trail.state",
                "pk": row["state_pk"],
                "fields": {
                    "name": row["name"].replace("--", "—"),
                    "abbr": row["name"],
                    "electoral_votes": 1,
                    "popular_votes": int(row["votes"]) - 500,
                    "poll_closing_time": int(POLL_CLOSING_TIMES[provinces[row["name"]]["province"]] + row["votes"] % 40),
                    "winner_take_all_flg": 1,
                    "election": 20
                },
                "d": row["d"]
            }
            for _, row in df.iterrows()
        ]
        self.file_manager.dump_json(self.election_dir, "states.json", states)
            
    def generate_candidate_state_multiplier_json(self, df: pd.DataFrame):
        df = self.calculate_state_multiplier(df)
        states = [
            {
                "model": "campaign_trail.candidate_state_multiplier",
                "pk": int(row["state_pk"] + 1000000 * row["party_pk"]),
                "fields": {
                    "candidate": int(row["party_pk"]),
                    "state": int(row["state_pk"]),
                    "state_multiplier": row["state_multiplier"]
                }
            }
            for _, row in df.iterrows()
        ]
        self.file_manager.dump_json(self.scenario_dir, "candidate_state_multiplier.json", states)


    def calculate_state_multiplier(self, df: pd.DataFrame):
        PLAYER_ADJUSTMENT = 0.97
        config = self.file_manager.load_json(self.scenario_dir, "config.json")
        vote_variable = config["vote_variable"]
        player_candidate = config["candidate"]
        candidate_issue_weight = config["candidate_issue_weight"]
        
        candidates = self.file_manager.load_json(self.election_dir, "candidates.json")
        candidates_pks = tuple(map(lambda candidate: candidate["pk"], candidates))
        candidate_issue_score_json = self.file_manager.load_json(self.election_dir, "candidate_issue_score.json")
        answers_historical = self.file_manager.load_json(self.scenario_dir, "answer_historical.json")
        answer_score_global_json = self.file_manager.load_json(self.scenario_dir, "answer_score_global.json")
        answer_score_issue_json = self.file_manager.load_json(self.scenario_dir, "answer_score_issue.json")
        answer_score_state_json = self.file_manager.load_json(self.scenario_dir, "answer_score_state.json")
        state_issue_score_json = self.file_manager.load_json(self.election_dir, "state_issue_score.json")
        issues_json = self.file_manager.load_json(self.election_dir, "issues.json")
        
        issues = []
        issue_scores = {}
        issue_score_normalizers = {}
        global_multipliers = {}
        state_multipliers = {}
        issue_state_multipliers = {}
        
        for issue_obj in issues_json:
            issues.append(issue_obj["pk"])
        for candidate in candidates_pks:
            global_multipliers[candidate] = 1
            for issue in issues:
                issue_scores[(candidate, issue)] = 0
                issue_score_normalizers[(candidate, issue)] = 0
        for score_obj in answer_score_global_json:
            if score_obj["fields"]["answer"] not in answers_historical:
                continue
            candidate = score_obj["fields"]["affected_candidate"]
            multiplier = score_obj["fields"]["global_multiplier"]
            global_multipliers[candidate] += multiplier
        for score_obj in answer_score_state_json:
            if score_obj["fields"]["answer"] not in answers_historical:
                continue
            state = score_obj["fields"]["state"]
            multiplier = score_obj["fields"]["state_multiplier"]
            candidate = score_obj["fields"]["affected_candidate"]
            state_multipliers[(candidate, state)] = state_multipliers.get((candidate, state), 0) + multiplier
        for score_obj in answer_score_issue_json:
            if score_obj["fields"]["answer"] not in answers_historical:
                continue
            issue = score_obj["fields"]["issue"]
            issue_score = score_obj["fields"]["issue_score"]
            issue_importance = score_obj["fields"]["issue_importance"]
            issue_scores[(player_candidate, issue)] += issue_score * issue_importance
            issue_score_normalizers[(player_candidate, issue)] += issue_importance
        for score_obj in candidate_issue_score_json:
            candidate = score_obj["fields"]["candidate"]
            issue = score_obj["fields"]["issue"]
            issue_score = score_obj["fields"]["issue_score"]
            issue_scores[(candidate, issue)] += issue_score * candidate_issue_weight
            issue_score_normalizers[(candidate, issue)] += candidate_issue_weight
        for candidate_issue in issue_scores:
            issue_scores[candidate_issue] /= issue_score_normalizers[candidate_issue]
        for score_obj in state_issue_score_json:
            state = score_obj["fields"]["state"]
            issue = score_obj["fields"]["issue"]
            issue_score = score_obj["fields"]["state_issue_score"]
            weight = score_obj["fields"]["weight"]
            for candidate in candidates_pks:
                key = (candidate, state)
                delta = vote_variable - abs(issue_score * abs(issue_score) - issue_scores[(candidate, issue)] * abs(issue_scores[(candidate, issue)])) * weight
                issue_state_multipliers[key] = issue_state_multipliers.get(key, 0) + delta
                
        def state_multiplier_formula(row):
            state = int(row["state_pk"])
            candidate = int(row["party_pk"])
            share = row["share"]
            global_multiplier = global_multipliers[candidate]
            answer_state_multiplier = state_multipliers.get((candidate, state), 0)
            issue_state_multiplier = issue_state_multipliers[(candidate, state)]
            multiplier = (share / issue_state_multiplier - answer_state_multiplier) / global_multiplier
            if candidate == player_candidate:
                multiplier /= PLAYER_ADJUSTMENT
            return multiplier

        df["state_multiplier"] = df.apply(lambda row: state_multiplier_formula(row), axis=1)
        return df
        
        

if __name__ == "__main__":
    election_name = "2025Canada"
    scenario_name = "2025Canada_LPCCarney"
    generator = Code2Generator(election_name, scenario_name)
    generator.generate()
