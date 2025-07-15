import os
from file_manager import FileManager


class Transcriber:
    def __init__(self, scenario_name):
        self.scenario_dir = os.path.join(os.pardir, scenario_name)
        self.file_manager = FileManager()
        
    def to_user_format(self):
        answers = self.file_manager.load_json(self.scenario_dir, "answers.json")
        questions = self.file_manager.load_json(self.scenario_dir, "questions.json")
        
        answers_by_question = {}
        for answer in answers:
            question_pk = answer["fields"]["question"]
            answers_by_question[question_pk] = answers_by_question.get(question_pk, []) + [answer["fields"]["description"]]

        details = [
            {
                "question": question["fields"]["description"],
                "answers": [{"answer": answer, "feedback": ""} for answer in answers_by_question[question["pk"]]]
            }
            for question in questions
        ]
        self.file_manager.dump_json(self.scenario_dir, "question_details.json", details)
    
    def to_game_format(self):
        pass
    

if __name__ == "__main__":
    transcriber = Transcriber("2025_LiberalCarney")
    transcriber.to_game_format()
