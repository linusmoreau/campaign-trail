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

    if (winner.candidate == 300 || (runnerUp.candidate == 300 && runnerUp.electoral_votes == winner.electoral_votes)) {
        if (winner.electoral_votes >= 172) {
            header = "Liberal Majority Government!";
            description = [
                "TODO"
            ];
        } else {
            // This outcome also occurs in the case of a Liberal tie for first
            header = "Liberal Minority Government!";
            description = [
                "TODO"
            ];
        }
        setImage("https://i.imgur.com/MVBYnzH.jpeg")
    } else if (winner.candidate == 301) {
        if (winner.electoral_votes >= 172) {
            header = "Conservative Majority Government!";
            description = [
                "TODO"
            ];
            setImage("https://i.imgur.com/jYkYfCa.jpeg")
        } else if (poilievre_won && winner.electoral_votes - runnerUp.electoral_votes >= 20 && winner.electoral_votes >= 165) {
            header = "Conservative Minority Government!";
            description = [
                "TODO"
            ];
            setImage("https://i.imgur.com/jYkYfCa.jpeg")
        } else {
            header = "Conservative Plurality!";
            description = [
                "TODO"
            ];
            setImage("https://i.imgur.com/bWPXiN4.jpeg")
        }
    } else {
        header = "Pundit Confusion!";
        description = [
            "Somehow, a party other than the Liberals or Conservatives won the most seats. Analysts will be scratching their heads for a long time, wondering how this could have happened."
        ]
        setImage("https://i.imgur.com/QenEQDJ.jpeg")
    }
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
