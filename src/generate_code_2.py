import os
import json

class Code2Generator:
    SECTION_VARIABLE_NAMES = (
        "questions_json",
        "answers_json",
        "states_json",
        "issues_json",
        "state_issue_score_json",
        "candidate_issue_score_json",
        "running_mate_issue_score_json",
        "candidate_state_multiplier_json",
        "answer_score_global_json",
        "answer_score_issue_json",
        "answer_score_state_json",
        "answer_feedback_json",
    )
    
    def __init__(self, scenario_name: str):
        self.scenario_name = scenario_name
        self.scenario_dir = os.path.join(os.pardir, scenario_name)

    def complete_map(self) -> str:
        with open(os.path.join(self.scenario_dir, "states.json"), "r") as f:
            ridings = json.load(f)
        print(ridings)
        for riding in ridings:
            pass
        return ""

    def mapping_code(self) -> str:
        with open("mapping_code.txt", "r") as f:
            mapping_code_1 = f.readline()
            mapping_code_2 = f.readline()
        return mapping_code_1 + self.complete_map() + mapping_code_2

    def join_sections(self) -> str:
        sections = [self.mapping_code()]
        for section in self.SECTION_VARIABLE_NAMES:
            section_name = section[:-5]
            section_filename = section_name + ".json"
            filepath = os.path.join(self.scenario_dir, section_filename)
            declaration = "campaignTrail_temp." + section + " = "
            try:
                with open(filepath, "r") as f:
                    s = declaration + f.read().strip()
            except FileNotFoundError:
                s = declaration + "[]"
            finally:
                sections.append(s)
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

if __name__ == "__main__":
    scenario_name = "2025_LiberalCarney"
    generator = Code2Generator(scenario_name)
    generator.generate()
