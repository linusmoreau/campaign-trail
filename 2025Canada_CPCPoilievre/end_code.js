campaignTrail_temp.candidate_image_url = "https://i.imgur.com/L8xdBOW.jpeg";
campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/jYkYfCa.jpeg";
campaignTrail_temp.candidate_last_name = "Conservative";
campaignTrail_temp.running_mate_last_name = "Poilievre";
campaignTrail_temp.election_json[0]["fields"]["advisor_url"] = "https://i.imgur.com/42rHEIO.jpeg";

campaignTrail_temp.multiple_endings = true;

endingPicker = (out, totv, aa, quickstats) => {
    function setImage(url) {
        if (url == '' || url == null) return;
        let interval = setInterval(function() {
            img = document.getElementsByClassName("person_image")[0];
            if (img != null) {
                img.src = url;
                clearInterval(interval);
            }
        }, 10);
    }

    // Did Poilievre win Carleton?
    const carleton = campaignTrail_temp.final_state_results.find(state => {return state.abbr == "Carleton"})
    const poilievre_won = carleton.result[0].candidate == 301

    // Did Carney win Nepean?
    const nepean = campaignTrail_temp.final_state_results.find(state => {return state.abbr == "Nepean"})
    const carney_won = nepean.result[0].candidate == 300

    const bloc_support = (
        campaignTrail_temp.player_answers[12] == 4132   // Promised everything to Quebec
    )

    winner = aa[0];
    runnerUp = aa[1];
    if (winner.candidate == 300 || (runnerUp.candidate == 300 && runnerUp.electoral_votes == winner.electoral_votes)) {
        if (winner.electoral_votes >= 172) {
            header = "Liberal Majority Government!";
            description = [
                "You lost. Badly. From a lead of over 20 points in the polls, you lost your advantage and you were defeated at the ballot box. The disappointment among your supporters is palpable. Many who were your greatest advocates are now calling for your resignation.",
                "With a majority government, Mark Carney and the Liberals will have a free hand in governing for the next four years. You can only hope that Carney turns out differently than Justin Trudeau.",
                "You are at a crossroads. Do you fight to keep the leadership of the Conservative Party? Or do you give in and head off into the sunset?"
            ];
            if (!poilievre_won) {
                description[0] += " It doesn’t help that you were defeated in your own constituency of Carleton."
            }
        } else {
            // This outcome also occurs in the case of a Liberal tie for first
            header = "Liberal Minority Government!";
            description = [
                "You lost. From a lead of over 20 points in the polls, you lost your advantage and you were defeated at the ballot box. Your supporters are disappointed, but at least you prevented the Liberals from winning a majority government. Still, some are questioning whether you should stay on as leader.",
                "Without a majority, the Liberals will need to tread carefully. You can keep them to account with the other opposition parties and keep advocating for Canadian workers and businesses. Hopefully Mark Carney turns out differently than Justin Trudeau and follows through with a reform agenda to unleash Canadian innovation.",
                "You may have a chance at becoming Prime Minister yet. Carney may seem fresh to voters right now but that sheen will wear off eventually. And you can be there to take over and put Canada first."
            ];
            if (!poilievre_won) {
                description[0] += " It doesn’t help that you were defeated in your own constituency of Carleton."
            }
        }
        setImage("https://i.imgur.com/MVBYnzH.jpeg")
        setMusic("https://www.youtube-nocookie.com/embed/JA5LJ7l0g0I?autoplay=1&start=20")
    } else if (winner.candidate == 301) {
        if (winner.electoral_votes >= 172) {
            header = "Conservative Majority Government!";
            description = [
                "You did it! You will be the 25th Prime Minister of Canada. The Liberals threw everything they had at you, switching their leader, copying your policies, and questioning your patriotism, but nothing could stop you. Your supporters are ecstatic that you were able to hold through and prevent a fourth Liberal term.",
                "With a majority government, you will have a free hand over the next four years to sweep away Liberal mismanagement and make Canada the most free and prosperous country in the world. You can deliver on your promises to axe taxes, build the homes, stop the crime, and restore the Canadian promise. You will also be responsible for negotiating a new trade deal with President Trump. Good luck with that.",
                "But for now, it’s time to celebrate! With you at the helm, you can steer the government to finally put Canada first, for a change."
            ];
            setImage("https://i.imgur.com/jYkYfCa.jpeg")
            setMusic("https://www.youtube-nocookie.com/embed/VXRx1kb6n7g?autoplay=1&start=50")
        } else {
            header = "Conservative Plurality!";
            description = [
                "The results are close on election night. However, in the final seat count, your Conservative Party ultimately beats out Carney’s Liberals. Your supporters breathe a sigh of relief that you stopped the Liberals from winning a fourth term outright. Still, many remain disappointed that you didn’t win a majority government given your previous massive lead."
            ];
            if (!poilievre_won) {
                description[0] += " It doesn’t help that you were defeated in your own constituency of Carleton."
            }
            if (bloc_support) {
                description.push(
                    "With your extensive promises to Québec during the campaign, you have won over the support of the Bloc Québécois. Despite your political distance from the Bloc, your plurality in the House of Commons along with your promises to Québec have won Blanchet over to tolerate a Conservative minority government. This paves the way for you to become the 25th Prime Minister of Canada. However, you will need to tread lightly as one wrong move could drive the Bloc away from you.",
                    "But for now, you can celebrate! With you at the helm, you can steer the government to finally put Canada first, for a change."
                )
                setImage("https://i.imgur.com/jYkYfCa.jpeg")
                setMusic("https://www.youtube-nocookie.com/embed/ChKbip4xHsI?autoplay=1")
                ctsAchievement("Deal with the Devil")
            } else {
                description.push(
                    "Whether you will become Prime Minister remains uncertain. Mark Carney can remain Prime Minister as long as he maintains the confidence of Parliament. As it stands, you will need to win over the other opposition parties to force Carney out of office if he doesn’t step down on his own. Failing that, Carney and the Liberals will get to continue governing though their position remains precarious."
                )
                setImage("https://i.imgur.com/bWPXiN4.jpeg")
                setMusic("https://www.youtube-nocookie.com/embed/f8JPZKvXMQg?autoplay=1")
            }
        }
    }
    s = `<h2>${header}</h2>`
    for (desc of description) {
        s += `<p>${desc}</p>`
    }

    if (winner.candidate == 301 && winner.electoral_votes >= 172) {
        ctsAchievement("Blue Wave")
    }
    if (winner.candidate == 301 && runnerUp.electoral_votes < winner.electoral_votes && !poilievre_won) {
        ctsAchievement("Sniped")
    }
    if (winner.candidate == 300 && runnerUp.candidate == 301 && runnerUp.popular_votes > winner.popular_votes) {
        ctsAchievement("They Can’t Keep Getting Away With It")
    }
    return s
}

replaceMusic({
    0: {
        name: "Introduction",
        tracklist: [
            {
                "name": "O Canada",
                "url": "https://audio.jukehost.co.uk/qsSsnrpKEXnYqVwyXZEESnypocC5XOGU"
            },
        ]
    }
})
