### Issue scores
#### Answer issue score
sum of (answer_issue_score)(answer_issue_importance) for each answer
#### Candidate issue score
(candidate_issue_score)(candidate_issue_weight) + (running_mate_issue_score)(running_mate_issue_weight)
#### Normalizer
candidate_issue_weight + running_mate_issue_weight + sum of answer_issue_importance for each answer
#### Total
(answer_issue_score + candidate_issue_score) / normalizer

### State multiplier
#### Answer state multiplier
sum of (answer_state_multiplier) for each answer
#### Issue state multiplier
sum of (vote_variable - (difference of squares of issue_score of state and campaign)(state_issue_weight)) for each issue
#### Total
((global_multiplier)(state_multiplier) + answer_state_multiplier) * issue_state_multiplier
