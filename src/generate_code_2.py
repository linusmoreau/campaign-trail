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

    def complete_map(self) -> str:
        with open(os.path.join(self.election_dir, "states.json"), "r", encoding="utf-8") as f:
            ridings = json.load(f)
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
        end_code_filepath = os.path.join(self.scenario_dir, "end_code.txt")
        with open(end_code_filepath, "r") as f:
            sections.append(f.read())
        code2 = "\n\n".join(sections) + "\n"
        return code2
            
    def save_to_file(self, s: str):
        output_filepath = os.path.join(self.scenario_dir, self.scenario_name + ".html")
        with open(output_filepath, "w") as f:
            f.write(s)
        
    def extract_geometry(self) -> pd.DataFrame:
        doc = minidom.parse(os.path.join(self.election_dir, "election_map.svg"))
        path_geometries = [
            (
                path.getAttribute("inkscape:label"),
                path.getAttribute("d"),
            )
            for path in doc.getElementsByTagName('path')
        ]
        return pd.DataFrame(path_geometries[:343], columns=("name", "d"))
    
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
        
        path = os.path.join(self.election_dir, "parties.json")
        with open(path, "r", encoding="utf-8") as f:
            parties = json.load(f)
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
        
    def generate_states_json(self, df: pd.DataFrame):
        states = [
            {
                "model": "campaign_trail.state",
                "pk": row["state_pk"],
                "fields": {
                    "name": row["name"],
                    "abbr": row["name"],
                    "electoral_votes": 1,
                    "popular_votes": int(row["votes"]),
                    "poll_closing_time": 30,
                    "winner_take_all_flg": 1,
                    "election": 20
                },
                "d": row["d"]
            }
            for _, row in df.iterrows()
        ]
        path = os.path.join(self.election_dir, "states.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(states, f, indent=4, ensure_ascii=False)
            
    def generate_candidate_state_multiplier_json(self, df: pd.DataFrame):
        states = [
            {
                "model": "campaign_trail.candidate_state_multiplier",
                "pk": int(row["state_pk"] + 1000000 * row["party_pk"]),
                "fields": {
                    "candidate": int(row["party_pk"]),
                    "state": int(row["state_pk"]),
                    "state_multipler": round(row["share"] / 100, 3)
                }
            }
            for _, row in df.iterrows()
        ]
        path = os.path.join(self.election_dir, "candidate_state_multiplier.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(states, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    election_name = "2025_Canada"
    scenario_name = "2025_LiberalCarney"
    generator = Code2Generator(election_name, scenario_name)
    generator.generate()
