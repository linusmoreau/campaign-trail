import os
from file_manager import FileManager


class Transcriber:
    def __init__(self, scenario_name):
        self.scenario_dir = os.path.join(os.pardir, scenario_name)
        self.file_manager = FileManager()
        self.score_pk = 10000
        
    def to_user_format(self):
        """Only partially implemented to extract questions and answers without any scoring or feedback"""
        answers = self.file_manager.load_json(self.scenario_dir, "answers.json")
        questions = self.file_manager.load_json(self.scenario_dir, "questions.json")
        
        answers_by_question = {}
        for answer in answers:
            question_pk = answer["fields"]["question"]
            answers_by_question[question_pk] = answers_by_question.get(question_pk, []) + [answer["fields"]["description"]]

        details = [
            {
                "question": question["fields"]["description"],
                "answers": [{"answer": answer} for answer in answers_by_question[question["pk"]]]
            }
            for question in questions
        ]
        self.file_manager.dump_json(self.scenario_dir, "question_details.json", details)
    
    def to_game_format(self, state_name_to_pk: dict[str, int], state_groupings: dict[str, list[int]]):
        config = self.file_manager.load_json(self.scenario_dir, "config.json")
        candidate = config["candidate"]
        score_multiplier = config["score_multiplier"]
        issue_multiplier = config["issue_multiplier"]
        question_details = self.file_manager.load_json(self.scenario_dir, "question_details.json")
        questions = []
        answers = []
        answer_feedback = []
        answer_score_global = []
        answer_score_issue = []
        answer_score_state = []

        for i, question_detail in enumerate(question_details):
            question_pk = 4000+(10*(i+1))
            questions.append(
                {
                    "model": "campaign_trail.question",
                    "pk": question_pk,
                    "fields": {
                        "priority": 0,
                        "description": question_detail["question"],
                        "likelihood": 1
                    }
                }
            )
            for j, answer_detail in enumerate(question_detail["answers"]):
                answer_pk = question_pk + j + 1
                answers.append(
                    {
                        "model": "campaign_trail.answer",
                        "pk": answer_pk,
                        "fields": {
                            "question": question_pk,
                            "description": answer_detail["answer"]
                        }
                    }
                )
                try:
                    answer_feedback.append(
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": answer_pk + 1000,
                            "fields": {
                                "answer": answer_pk,
                                "candidate": candidate,
                                "answer_feedback": answer_detail["feedback"]
                            }
                        }
                    )
                except KeyError:
                    # No feedback included
                    pass
                self.add_scores(
                    candidate,
                    score_multiplier,
                    issue_multiplier,
                    answer_pk,
                    answer_detail,
                    answer_score_global,
                    answer_score_issue,
                    answer_score_state,
                    state_name_to_pk,
                    state_groupings
                )
                self.add_scores(
                    candidate,
                    score_multiplier,
                    answer_pk,
                    issue_multiplier,
                    question_detail,
                    answer_score_global,
                    answer_score_issue,
                    answer_score_state,
                    state_name_to_pk,
                    state_groupings
                )
        
        self.file_manager.dump_json(self.scenario_dir, "questions.json", questions)
        self.file_manager.dump_json(self.scenario_dir, "answers.json", answers)
        self.file_manager.dump_json(self.scenario_dir, "answer_feedback.json", answer_feedback)
        self.file_manager.dump_json(self.scenario_dir, "answer_score_global.json", answer_score_global)
        self.file_manager.dump_json(self.scenario_dir, "answer_score_issue.json", answer_score_issue)
        self.file_manager.dump_json(self.scenario_dir, "answer_score_state.json", answer_score_state)
        
        
    def add_scores(
        self,
        candidate,
        score_multiplier,
        issue_multiplier,
        answer_pk,
        answer_detail,
        answer_score_global,
        answer_score_issue,
        answer_score_state,
        state_name_to_pk,
        state_groupings
    ):
        for score_global in answer_detail.get("score_global", ()):
            answer_score_global.append(
                {
                    "model": "campaign_trail.answer_score_global",
                    "pk": self.score_pk,
                    "fields": {
                        "answer": answer_pk,
                        "candidate": candidate,
                        "affected_candidate": score_global.get("affected_candidate", candidate),
                        "global_multiplier": score_global["global_multiplier"] * score_multiplier
                    }
                }
            )
            self.score_pk += 1
        for score_issue in answer_detail.get("score_issue", ()):
            answer_score_issue.append(
                {
                    "model": "campaign_trail.answer_score_issue",
                    "pk": self.score_pk,
                    "fields": {
                        "answer": answer_pk,
                        "issue": score_issue["issue"],
                        "issue_score": score_issue["issue_score"] * issue_multiplier,
                        "issue_importance": score_issue["issue_importance"]
                    }
                }
            )
            self.score_pk += 1
        for score_state in answer_detail.get("score_state", ()):
            answer_score_state.append(
                {
                    "model": "campaign_trail.answer_score_state",
                    "pk": self.score_pk,
                    "fields": {
                        "answer": answer_pk,
                        "state": state_name_to_pk[score_state["state"]] if type(score_state["state"]) is str else score_state["state"],
                        "candidate": candidate,
                        "affected_candidate": score_state.get("affected_candidate", candidate),
                        "state_multiplier": score_state["state_multiplier"] * score_multiplier
                    }
                }
            )
            self.score_pk += 1
        for score_group in answer_detail.get("score_group", ()):
            states = state_groupings[score_group["group"]]
            for state in states:
                answer_score_state.append(
                    {
                        "model": "campaign_trail.answer_score_state",
                        "pk": self.score_pk,
                        "fields": {
                            "answer": answer_pk,
                            "state": state,
                            "candidate": candidate,
                            "affected_candidate": score_group.get("affected_candidate", candidate),
                            "state_multiplier": score_group["state_multiplier"] * score_multiplier
                        }
                    }
                )
                self.score_pk += 1
