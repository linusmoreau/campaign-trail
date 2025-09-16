e = campaignTrail_temp;
e.candidate_image_url = "https://i.imgur.com/rHeMJfm.png";
e.running_mate_image_url = "https://i.imgur.com/E2vgW9A.png";
e.candidate_last_name = "NDP";
e.running_mate_last_name = "Singh";
e.election_json[0]["fields"]["advisor_url"] = "https://i.imgur.com/yStADGB.jpeg";
e.global_parameter_json[0]["fields"]["candidate_issue_weight"] = 6;
e.global_parameter_json[0]["fields"]["question_count"] = 25;
campaign_sign = "https://i.imgur.com/R9TlLQG.png";
nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#F4A460"
$("#game_window")[0].style.backgroundImage = "url(https://i.imgur.com/9V9nGwl.jpeg)";

e.multiple_endings = true;
e.cyoa = true;
e.collect_results = true;

getQuestionFromPk = function (pk) {
    for (question of e.questions_json) {
        if (question.pk == pk) {
            return question;
        }
    }
    return null;
};

cyoAdventure = (_) => {
    ans = e.player_answers[e.player_answers.length - 1];
    if (ans == 4062) {
        e.questions_json.splice(6, 1, getQuestionFromPk(4260));
    }
    else if (ans == 4063) {
        e.questions_json.splice(6, 1, getQuestionFromPk(4270));
    }
    if (e.player_answers.length == 24) {
        if (e.current_results[1].find(riding => riding.abbr == "Burnaby Central").result[0].candidate == 302) {
            e.questions_json.splice(24, 1, getQuestionFromPk(4280));
        }
    } 
}

endingPicker = (out, totv, aa, quickstats) => {
    loadScripts();

    winner = aa[0];
    runnerUp = aa[1];

    const carleton = e.final_state_results.find(state => {return state.abbr == "Carleton"})
    const poilievre_won = carleton.result[0].candidate == 301

    const burnaby_central = e.final_state_results.find(state => {return state.abbr == "Burnaby Central"})
    const singh_won = burnaby_central.result[0].candidate == 302

    const ndp_seats = quickstats[0];
    const ndp_share = quickstats[1];

    let overall_result = "";
    let ndp_performance = "";
    let next_steps = "";
    let singh_future = "";
    let header = "";
    if (winner.candidate == 300 || (runnerUp.candidate == 300 && runnerUp.electoral_votes == winner.electoral_votes)) {
        overall_result += "After a tumultuous political crisis and election campaign, it looks like Mark Carney has landed on top."
        if (winner.electoral_votes >= 172) {
            header = "Liberals win majority";
            overall_result += " With his Liberal Party winning a majority of seats, he looks set to govern for the next four years."
        } else {
            // This outcome also occurs in the case of a Liberal tie for first
            header = "Liberals win minority";
            overall_result += " With his Liberal Party only winning a minority of seats, he will still need to maintain the confidence of the opposition parties to avoid having his term cut short."
        }
        setImage("https://i.imgur.com/MVBYnzH.jpeg")
    } else if (winner.candidate == 301) {
        overall_result += "After a tumultuous political crisis and election campaign, it looks like Pierre Poilievre has landed on top."
        if (winner.electoral_votes >= 172) {
            header = "Conservatives win majority";
            overall_result += " With his Conservative Party winning a majority of seats, he looks set to govern for the next four years."
            overall_result += " You wonder if there was anything you could have done differently to prevent Poilievre from becoming Prime Minister."
            setImage("https://i.imgur.com/jYkYfCa.jpeg")
        } else if (poilievre_won && winner.electoral_votes - runnerUp.electoral_votes >= 20 && winner.electoral_votes >= 165) {
            header = "Conservatives win minority";
            overall_result += " Despite the Conservative Party failing to win a majority, Mark Carney has decided to give up the reins of power and head into opposition."
            overall_result += " You wonder if there was anything you could have done differently to prevent Poilievre from becoming Prime Minister."
            setImage("https://i.imgur.com/jYkYfCa.jpeg")
        } else {
            header = "Conservatives win plurality, Carney does not resign";
            overall_result = "After a tumultuous political crisis and election campaign, it looks like Pierre Poilievre’s Conservatives have won the most seats. However, he failed to win a majority government, and the results are close enough that Mark Carney has decided to try and stay on as Prime Minister with the support of the smaller parties."
            setImage("https://i.imgur.com/bWPXiN4.jpeg")
        }
    } else {
        header = "Pundit Confusion!";
        overall_result = "Somehow, a party other than the Liberals or Conservatives won the most seats. Analysts will be scratching their heads for a long time, wondering how this could have happened."
        setImage("https://i.imgur.com/QenEQDJ.jpeg")
    }

    const ndp_disaster = ndp_seats < 12;
    if (ndp_seats < 9) {
        if (ndp_share < 6.88) {
            ndp_performance = "Your own party’s performance was a disaster. This is the worst result for the NDP in history, in both seat count and share of the popular vote."
        } else {
            ndp_performance = "Your own party’s performance was a disaster. This is the worst seat total for the NDP in history."
        }
    } else if (ndp_seats < 12) {
        ndp_performance = "Your own party’s performance was terrible. This is the second worst seat total for the NDP in history, after the disastrous 1993 election."
    } else if (ndp_seats < 25) {
        ndp_performance = "Your own party’s performance was disappointing but unsurprising. At the very least, you managed to win at least the minimum of 12 seats needed for official party status and the resulting parliamentary privileges."
    } else {
        ndp_performance = "You managed to perform at least as well as you did in the previous election. Pundits had written off your party due to the strong political headwinds turning against you, but you managed to prove them wrong."
    }

    if (ndp_disaster) {
        header += ", NDP decimated";
        if (singh_won) {
            ndp_performance += " It’s a small comfort that you still won your own seat in Burnaby Central."
        } else {
            ndp_performance += " You even lost your own seat in Burnaby Central."
        }
        setEndSong("NDP Disaster", "Hurt Me Tomorrow — K'NAAN", "https://audio.jukehost.co.uk/xVGcopPeh8KMZYGGVpP4wquA7FuhXPTD")
    } else {
        header += ", NDP holds on";
        if (singh_won) {
            ndp_performance += " You will also personally return to Parliament, having held on to your own seat in Burnaby Central."
        } else {
            ndp_performance += " Despite this, you still lost your own seat in Burnaby Central."
        }
        setEndSong("NDP Survival", "Wavin' Flag — Young Artists for Haiti", "https://audio.jukehost.co.uk/tkV5YPNalJ1PBzWrFn0ISmOWY44PXUFu")
    }

    if (ndp_seats < 25) {
        next_steps += "Moving forward, the NDP will need to rebuild and hope to compete in the next election on a stronger footing."
    } else {
        next_steps += "Moving forward, the NDP remains in a good position to compete in future elections. In the meantime, the NDP caucus can continue to carry out its role as the “conscience” of Parliament."
    }

    const saved_money = campaignTrail_temp.player_answers[5] == 4063;
    const spent_money = campaignTrail_temp.player_answers[5] == 4061;
    if (saved_money && !ndp_disaster) {
        ctsAchievement("Financially Responsible");
        next_steps += " Having avoided going into debt during the election and maintained official party status, the NDP is on secure financial ground to stay in the fight in future elections."
    }
    else if (saved_money) {
        next_steps += " Having avoided going into debt during the election, the NDP is financially solvent but the loss of official party still means the party will lose out on some public funding."
    }
    else if (spent_money) {
        next_steps += " Having taken out a large amount of debt during the campaign, the NDP will have to build back its finances if it hopes to be competitive in the future."
    }

    if (ndp_seats < 12) {
        singh_future = "As for yourself, with the NDP having lost official party status, you will be expected to resign as leader. You can try to find a role in politics elsewhere or return to your legal practice."
    }
    else if (!singh_won && ndp_seats < 24) {
        singh_future = "As for yourself, having lost your own seat and achieved the lowest seat total since you became leader six years ago, you will be expected to resign. You can try to find a role in politics elsewhere or return to your legal practice."
    }
    else if (singh_won && ndp_seats < 24) {
        singh_future = "As for yourself, having retained your own seat and maintained official party status, you could try to stay on as leader. However, you may still face a challenge to your leadership as the result remains the worst since you became leader."
    }
    else if (singh_won) {
        singh_future  ="As for yourself, having retained your own seat and kept the NDP caucus at healthy levels, you could probably stay on as leader if you would like to."
    }

    if (singh_won) {
        ctsAchievement("You Can’t Get Rid of Me");
    }
    if (!ndp_disaster) {
        ctsAchievement("Still Fighting");
    }

    description = [overall_result, ndp_performance, next_steps, singh_future];
    s = `<h2>${header}</h2>`
    for (desc of description) {
        s += `<p>${desc}</p>`
    }
    return s
}

replaceMusic({
    0: {
        name: "NDP Campaign",
        tracklist: [
            {
                "name": "Differentology (Ready Fi Di Road) — Bunji Garlin",
                "url": "https://audio.jukehost.co.uk/EM21UL23IZR5BKoncHJecmX3YSbdT9ob"
            },
            {
                "name": "Northern Touch — Rascalz",
                "url": "https://audio.jukehost.co.uk/jObqRIHopZ7t8LHd1UMjj8bmPp0HAKpD"
            },
            {
                "name": "Supernovas — k-os",
                "url": "https://audio.jukehost.co.uk/iKAYZWS0OQ3iwq0lylVMGiJJgI3SRCOb"
            },
            {
                "name": "Wavin' Flag — K'NAAN",
                "url": "https://audio.jukehost.co.uk/9ndrE0Szm9LvmxsIbmgYtJGicMyR3iK6"
            }
        ]
    }
})
