import os
import json
import pandas as pd
from collections import OrderedDict
from xml.dom import minidom

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

    def complete_map(self) -> str:
        with open(os.path.join(self.election_dir, "states.json"), "r") as f:
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
            
    def generate(self):
        code2 = self.join_sections()
        self.save_to_file(code2)
        
    def extract_geometry(self):
        doc = minidom.parse(os.path.join(self.election_dir, "election_map.svg"))
        path_geometries = [
            {
                "name": path.getAttribute("inkscape:label"),
                "d": path.getAttribute("d")
            }
            for path in doc.getElementsByTagName('path')
        ]
        return path_geometries[:343]
    
    def extract_historical_results(self):
        path = os.path.join(self.election_dir, "election_results.txt")
        df = pd.read_csv(path, sep='\t', header=1)
        print(len(df))
        df = df[df["Type of results*"] == "validated"]
        print(len(df))
        df = df[df["Political affiliation"] == "NDP-New Democratic Party"]
        print(len(df))
        pass

if __name__ == "__main__":
    election_name = "2025_Canada"
    scenario_name = "2025_LiberalCarney"
    generator = Code2Generator(election_name, scenario_name)
    generator.generate()
    # generator.extract_historical_results()
