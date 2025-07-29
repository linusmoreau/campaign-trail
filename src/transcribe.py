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
                answer_global_scores, answer_issue_scores, answer_state_scores = self.get_scores(
                    candidate,
                    score_multiplier,
                    answer_pk,
                    answer_detail,
                    state_name_to_pk,
                    state_groupings
                )
                question_global_scores, question_issue_scores, question_state_scores = self.get_scores(
                    candidate,
                    score_multiplier,
                    answer_pk,
                    question_detail,
                    state_name_to_pk,
                    state_groupings
                )
            
                def score_global_merge(score, other_score):
                    new_score = score.copy()
                    new_score["fields"]["global_multiplier"] += other_score["fields"]["global_multiplier"]
                    return new_score
                    
                def score_issue_merge(score, other_score):
                    new_score = score.copy()
                    new_score["fields"]["issue_score"] = score["fields"]["issue_score"] * score["fields"]["issue_importance"] + other_score["fields"]["issue_score"] * other_score["fields"]["issue_importance"]
                    new_score["fields"]["issue_importance"] += other_score["fields"]["issue_importance"]
                    return new_score
                    
                def score_state_merge(score, other_score):
                    new_score = score.copy()
                    new_score["fields"]["state_multiplier"] += other_score["fields"]["state_multiplier"]
                    return new_score

                answer_score_global += self.merge_scores(
                    answer_global_scores, 
                    question_global_scores, 
                    ("answer", "affected_candidate"),
                    score_global_merge
                )
                answer_score_issue += self.merge_scores(
                    answer_issue_scores, 
                    question_issue_scores, 
                    ("answer", "issue"),
                    score_issue_merge
                )
                answer_score_state += self.merge_scores(
                    answer_state_scores,
                    question_state_scores,
                    ("answer", "state", "affected_candidate"),
                    score_state_merge
                )
                
        self.file_manager.dump_json(self.scenario_dir, "questions.json", questions)
        self.file_manager.dump_json(self.scenario_dir, "answers.json", answers)
        self.file_manager.dump_json(self.scenario_dir, "answer_feedback.json", answer_feedback)
        self.file_manager.dump_json(self.scenario_dir, "answer_score_global.json", answer_score_global)
        self.file_manager.dump_json(self.scenario_dir, "answer_score_issue.json", answer_score_issue)
        self.file_manager.dump_json(self.scenario_dir, "answer_score_state.json", answer_score_state)
        
        
    def merge_scores(self, scores, other_scores, merge_on, func):
        new_scores = []
        score_merged = set()
        other_score_merged = set()
        for i, score in enumerate(scores):
            for j, other_score in enumerate(other_scores):
                for key in merge_on:
                    if score["fields"][key] != other_score["fields"][key]:
                        break
                else:
                    new_scores.append(func(score, other_score))
                    score_merged.add(i)
                    other_score_merged.add(j)
        for i, score in enumerate(scores):
            if i not in score_merged:
                new_scores.append(score)
        for j, score in enumerate(other_scores):
            if j not in other_score_merged:
                new_scores.append(score)
        return new_scores
        
        
    def get_scores(
        self,
        candidate,
        score_multiplier,
        answer_pk,
        answer_detail,
        state_name_to_pk,
        state_groupings
    ):
        answer_score_global = []
        answer_score_issue = []
        answer_score_state = []
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
                        "issue_score": score_issue["issue_score"],
                        "issue_importance": score_issue.get("issue_importance", 1),
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
                            "state": state_name_to_pk[state],
                            "candidate": candidate,
                            "affected_candidate": score_group.get("affected_candidate", candidate),
                            "state_multiplier": score_group["state_multiplier"] * score_multiplier
                        }
                    }
                )
                self.score_pk += 1
        return answer_score_global, answer_score_issue, answer_score_state
    