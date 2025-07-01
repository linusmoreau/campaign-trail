import os
import json
import pandas as pd
from collections import OrderedDict
from xml.dom import minidom
import sys
sys.stdout.reconfigure(encoding='utf-8') # type: ignore

class Code2Generator:
    ELECTION_VARIABLE_NAMES = (
        "states_json",
        "issues_json",
        "state_issue_score_json",
        "candidate_state_multiplier_json",
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
    )
    
    def __init__(self, election_name: str, scenario_name: str):
        self.election_name = election_name
        self.scenario_name = scenario_name
        self.election_dir = os.path.join(os.pardir, election_name)
        self.scenario_dir = os.path.join(os.pardir, scenario_name)
        
    def generate(self):
        self.process_riding_data()
        code2 = self.join_sections()
        self.save_to_file(code2)
        
    def load_json(self, dir: str, fname: str):
        with open(os.path.join(dir, fname), "r", encoding="utf-8") as f:
            return json.load(f)
        
    def dump_json(self, dir: str, fname: str, contents):
        with open(os.path.join(dir, fname), "w+", encoding="utf-8") as f:
            json.dump(contents, f, indent=4, ensure_ascii=False)

    def complete_map(self) -> str:
        ridings = self.load_json(self.election_dir, "states.json")
        full_map = OrderedDict()
        for riding in ridings:
            full_map[riding["fields"]["abbr"]] = riding["d"]
        return json.dumps(full_map)

    def mapping_code(self) -> str:
        with open(os.path.join(self.election_dir, "mapping_code.txt"), "r") as f:
            mapping_code_1 = f.readline().strip()
            mapping_code_2 = f.readline().strip()
        return mapping_code_1 + self.complete_map() + mapping_code_2
    
    def format_section(self, section: str, dir: str) -> str:
        section_name = section[:-5]
        section_filename = section_name + ".json"
        filepath = os.path.join(dir, section_filename)
        declaration = "campaignTrail_temp." + section + " = "
        try:
            with open(filepath, "r") as f:
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
        with open(end_code_filepath, "r") as f:
            sections.append(f.read())
        code2 = "\n\n".join(sections) + "\n"
        return code2
            
    def save_to_file(self, s: str):
        output_filepath = os.path.join(self.scenario_dir, self.scenario_name + ".html")
        with open(output_filepath, "w") as f:
            f.write(s)
        
    def extract_geometry(self) -> pd.DataFrame:
        doc = minidom.parse(os.path.join(self.election_dir, "election_map_compressed.svg"))
        path_geometries = [
            (
                path.getAttribute("inkscape:label"),
                path.getAttribute("d"),
            )
            for path in doc.getElementsByTagName('path')[:343]
        ]
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
    
    def check_ridings_match(self, results, geometry):
        results_ridings = set(results["name"])
        geometry_ridings = set(geometry["name"])
        mismatch = results_ridings.union(geometry_ridings).difference(results_ridings.intersection(geometry_ridings))
        if len(mismatch) > 0:
            print("Warning: mismatch in ridings named in election results and map:", mismatch)
    
    def process_riding_data(self):
        results = self.extract_historical_results()
        geometry = self.extract_geometry()
        self.check_ridings_match(results, geometry)
        vote_totals = results.groupby(["name"])["votes"].first()
        df = geometry.join(vote_totals, "name")
        df["state_pk"] = df.index + 343000
        self.generate_states_json(df)
        self.generate_state_issue_score_json(df)
        
        parties = self.load_json(self.election_dir, "candidates.json")
        index = []
        for party in parties.values():
            for state_pk in df["state_pk"]:
                index.append((state_pk, party))
        df = df[["name", "state_pk"]]
        df = df.set_index("name")
        df = results.join(df, "name")
        df["party_pk"] = df.apply(lambda row: parties[row["party"]] if row["party"] in parties else parties["Others"], axis=1)
        df = df.groupby(["state_pk", "party_pk"])["share"].sum().reindex(index, fill_value=0).reset_index()
        self.generate_candidate_state_multiplier_json(df)
        
    def generate_state_issue_score_json(self, df: pd.DataFrame):
        state_issue_scores = []
        for issue in range(110, 115):
            state_issue_scores.extend([
                {
                    "model": "campaign_trail.state_issue_score",
                    "pk": int(issue * 1000 + row["state_pk"] % 1000),
                    "fields": {
                        "state": int(row["state_pk"]),
                        "issue": issue,
                        "state_issue_score": 0,
                        "weight": 1
                    }
                }
                for _, row in df.iterrows()
            ])
        path = os.path.join(self.election_dir, "state_issue_score.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(state_issue_scores, f, indent=4, ensure_ascii=False)
        
    def generate_states_json(self, df: pd.DataFrame):
        states = [
            {
                "model": "campaign_trail.state",
                "pk": row["state_pk"],
                "fields": {
                    "name": row["name"].replace("--", "—"),
                    "abbr": row["name"],
                    "electoral_votes": 1,
                    "popular_votes": int(row["votes"]),
                    "poll_closing_time": 30,    # TODO: Map ridings to provinces for setting poll closing time
                    "winner_take_all_flg": 1,
                    "election": 20
                },
                "d": row["d"]
            }
            for _, row in df.iterrows()
        ]
        self.dump_json(self.election_dir, "states.json", states)
            
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
        self.dump_json(self.election_dir, "candidate_state_multiplier.json", states)


    def calculate_state_multiplier(self, df: pd.DataFrame):
        # TODO Hard-coded for now. Eventually put in a config and automate Code 1 creation.
        vote_variable = 1.125
        player_candidate = 300
        candidate_issue_weight = 10
        
        candidates = tuple(self.load_json(self.election_dir, "candidates.json").values())
        candidate_issue_score_json = self.load_json(self.election_dir, "candidate_issue_score.json")
        answers_historical = self.load_json(self.scenario_dir, "answer_historical.json")
        answer_score_global_json = self.load_json(self.scenario_dir, "answer_score_global.json")
        answer_score_issue_json = self.load_json(self.scenario_dir, "answer_score_issue.json")
        answer_score_state_json = self.load_json(self.scenario_dir, "answer_score_state.json")
        state_issue_score_json = self.load_json(self.election_dir, "state_issue_score.json")
        issues_json = self.load_json(self.election_dir, "issues.json")
        
        issues = []
        issue_scores = {}
        issue_score_normalizers = {}
        global_multipliers = {}
        state_multipliers = {}
        issue_state_multipliers = {}
        
        for issue_obj in issues_json:
            issues.append(issue_obj["pk"])
        for candidate in candidates:
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
            issue_scores[(candidate, issue)] += issue_score
            issue_score_normalizers[(candidate, issue)] += candidate_issue_weight
        for candidate_issue in issue_scores:
            issue_scores[candidate_issue] /= issue_score_normalizers[candidate_issue]
        for score_obj in state_issue_score_json:
            state = score_obj["fields"]["state"]
            issue = score_obj["fields"]["issue"]
            issue_score = score_obj["fields"]["state_issue_score"]
            weight = score_obj["fields"]["weight"]
            for candidate in candidates:
                key = (candidate, state)
                delta = vote_variable - abs(issue_score**2 - issue_scores[(candidate, issue)]**2) * weight
                issue_state_multipliers[key] = issue_state_multipliers.get(key, 0) + delta
                
        def state_multiplier_formula(row):
            state = int(row["state_pk"])
            candidate = int(row["party_pk"])
            share = row["share"]
            global_multiplier = global_multipliers[candidate]
            answer_state_multiplier = state_multipliers.get((candidate, state), 0)
            issue_state_multiplier = issue_state_multipliers[(candidate, state)]
            return (share / issue_state_multiplier - answer_state_multiplier) / global_multiplier

        df["state_multiplier"] = df.apply(lambda row: state_multiplier_formula(row), axis=1)
        return df
        
        

if __name__ == "__main__":
    election_name = "2025_Canada"
    scenario_name = "2025_LiberalCarney"
    generator = Code2Generator(election_name, scenario_name)
    generator.generate()
