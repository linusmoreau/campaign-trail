campaignTrail_temp.candidate_image_url = "https://i.imgur.com/rHeMJfm.png";
campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/E2vgW9A.png";
campaignTrail_temp.candidate_last_name = "NDP";
campaignTrail_temp.running_mate_last_name = "Singh";
campaignTrail_temp.election_json[0]["fields"]["advisor_url"] = "https://i.imgur.com/yStADGB.jpeg";
campaignTrail_temp.global_parameter_json[0]["fields"]["candidate_issue_weight"] = 6;
campaignTrail_temp.global_parameter_json[0]["fields"]["question_count"] = 25;
campaign_sign = "https://i.imgur.com/R9TlLQG.png";
nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#F4A460"
$("#game_window")[0].style.backgroundImage = "url(https://i.imgur.com/9V9nGwl.jpeg)";

campaignTrail_temp.multiple_endings = true;

endingPicker = (out, totv, aa, quickstats) => {
    loadScripts();

    winner = aa[0];
    runnerUp = aa[1];

    const carleton = campaignTrail_temp.final_state_results.find(state => {return state.abbr == "Carleton"})
    const poilievre_won = carleton.result[0].candidate == 301

    const burnaby_central = campaignTrail_temp.final_state_results.find(state => {return state.abbr == "Burnaby Central"})
    const singh_won = burnaby_central.result[0].candidate == 302

    const ndp_seats = quickstats[0];
    const ndp_share = quickstats[1];

    let overall_result = "";
    let ndp_performance = "";
    let next_steps = "";
    if (winner.candidate == 300 || (runnerUp.candidate == 300 && runnerUp.electoral_votes == winner.electoral_votes)) {
        overall_result += "After a tumultuous political crisis and election campaign, it looks like Mark Carney has landed on top."
        if (winner.electoral_votes >= 172) {
            header = "Liberal Majority Government!";
            overall_result += " With his Liberal Party winning a majority of seats, he looks set to govern for the next four years."
        } else {
            // This outcome also occurs in the case of a Liberal tie for first
            header = "Liberal Minority Government!";
            overall_result += " With his Liberal Party only winning a minority of seats, he will still need to maintain the confidence of the opposition parties to avoid having his term cut short."
        }
        setImage("https://i.imgur.com/MVBYnzH.jpeg")
    } else if (winner.candidate == 301) {
        overall_result += "After a tumultuous political crisis and election campaign, it looks like Pierre Poilievre has landed on top."
        if (winner.electoral_votes >= 172) {
            header = "Conservative Majority Government!";
            overall_result += " With his Conservative Party winning a majority of seats, he looks set to govern for the next four years."
            overall_result += " You wonder if there was anything you could have done differently to prevent Poilievre from becoming Prime Minister."
            setImage("https://i.imgur.com/jYkYfCa.jpeg")
        } else if (poilievre_won && winner.electoral_votes - runnerUp.electoral_votes >= 20 && winner.electoral_votes >= 165) {
            header = "Conservative Minority Government!";
            overall_result += " Despite the Conservative Party failing to win a majority, Mark Carney has decided to give up the reins of power and head into opposition."
            overall_result += " You wonder if there was anything you could have done differently to prevent Poilievre from becoming Prime Minister."
            setImage("https://i.imgur.com/jYkYfCa.jpeg")
        } else {
            header = "Conservative Plurality!";
            overall_result = "After a tumultuous political crisis and election campaign, it looks like Pierre Poilievre’s Conservatives have won the most seats. However, he failed to win a majority government, and the results are close enough that Mark Carney has decided to try and stay on as Prime Minister with the support of the smaller parties."
            setImage("https://i.imgur.com/bWPXiN4.jpeg")
        }
    } else {
        header = "Pundit Confusion!";
        overall_result = "Somehow, a party other than the Liberals or Conservatives won the most seats. Analysts will be scratching their heads for a long time, wondering how this could have happened."
        setImage("https://i.imgur.com/QenEQDJ.jpeg")
    }

    let ndp_disaster = false;
    if (ndp_seats < 12) {
        ndp_disaster = true
    }
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
        if (singh_won) {
            ndp_performance += " It’s a small comfort that you still won your own seat in Burnaby Central."
        } else {
            ndp_performance += " You even lost your own seat in Burnaby Central."
        }
    } else {
        if (singh_won) {
            ndp_performance += " You will also be personally returning the Parliament, having held on to your own seat in Burnaby Central."
        } else {
            ndp_performance += " Despite this, you still lost your own seat in Burnaby Central."
        }
    }

    if (ndp_seats < 25) {
        next_steps += "Moving forward, the NDP will need to rebuild and hope to compete in the next election on a stronger footing."
    } else {
        next_steps += "Moving forward, the NDP remains in a good position to compete in future elections. In the meantime, the NDP caucus can continue to carry out its role as the “conscience” of Parliament."
    }

    description = [overall_result, ndp_performance, next_steps];
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
                "url": "https://audio.jukehost.co.uk/4wjrI23PVm6AZ1hZn92IUy5jju6bTh1V"
            }
        ]
    }
})
