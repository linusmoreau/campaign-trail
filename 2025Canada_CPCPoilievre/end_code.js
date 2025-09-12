campaignTrail_temp.candidate_image_url = "https://i.imgur.com/7sUgs7N.jpeg";
campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/jYkYfCa.jpeg";
campaignTrail_temp.candidate_last_name = "Conservative";
campaignTrail_temp.running_mate_last_name = "Poilievre";
campaignTrail_temp.election_json[0]["fields"]["advisor_url"] = "https://i.imgur.com/42rHEIO.jpeg";
campaignTrail_temp.global_parameter_json[0]["fields"]["candidate_issue_weight"] = 6;
campaign_sign = "https://i.imgur.com/PtDprh3.png";
nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#6495ED"
$("#game_window")[0].style.backgroundImage = "url(https://i.imgur.com/7nX3Ycu.jpeg)";

campaignTrail_temp.multiple_endings = true;

endingPicker = (out, totv, aa, quickstats) => {
    loadScripts();

    winner = aa[0];
    runnerUp = aa[1];

    // Did Poilievre win Carleton?
    const carleton = campaignTrail_temp.final_state_results.find(state => {return state.abbr == "Carleton"})
    const poilievre_won = carleton.result[0].candidate == 301

    // Did Carney win Nepean?
    const nepean = campaignTrail_temp.final_state_results.find(state => {return state.abbr == "Nepean"})
    const carney_won = nepean.result[0].candidate == 300

    let bloc_support = campaignTrail_temp.player_answers[12] == 4132   // Promised everything to Quebec
    if (winner.candidate != 301) {
        bloc_support = false
    }
    for (party of aa) {
        if (party.candidate == 304) {
            if (party.electoral_votes + winner.electoral_votes < 172) {
                bloc_support = false
            }
            break
        }
    }
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
        setEndSong("Conservative Defeat", "Bittersweet — Paul Brandt", "https://audio.jukehost.co.uk/eXWMHTk4kFJwS2OFbE7CpcvD7L4MsIL2")
    } else if (winner.candidate == 301) {
        if (winner.electoral_votes >= 172) {
            header = "Conservative Majority Government!";
            description = [
                "You did it! You will be the 25th Prime Minister of Canada. The Liberals threw everything they had at you, switching their leader, copying your policies, and questioning your patriotism, but nothing could stop you. Your supporters are ecstatic that you were able to hold through and prevent a fourth Liberal term.",
                "With a majority government, you will have a free hand over the next four years to sweep away Liberal mismanagement and make Canada the most free and prosperous country in the world. You can deliver on your promises to axe taxes, build the homes, stop the crime, and restore the Canadian promise. You will also be responsible for negotiating a new trade deal with President Trump. Good luck with that.",
                "But for now, it’s time to celebrate! With you at the helm, you can steer the government to finally put Canada first, for a change."
            ];
            setImage("https://i.imgur.com/jYkYfCa.jpeg")
            setEndSong("Conservative Majority Victory", "Our Home — Brett Kissel", "https://audio.jukehost.co.uk/BDWXkhGUAm5bIX14tgViDbSAPrYYGolq")
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
                setEndSong("Conservative Minority Victory with Bloc Support", "Demain nous appartient — Stéphane Venne", "https://audio.jukehost.co.uk/INJl5Kvx09u6GcR9FD0LBGfzXMdncLdU")
                ctsAchievement("Deal with the Devil")
            } else if (poilievre_won && winner.electoral_votes - runnerUp.electoral_votes >= 20 && winner.electoral_votes >= 165) {
                description.push(
                    "Despite your lack of majority, you have won significantly more seats than the Liberals, and Carney chooses to resign, allowing you to be sworn in as the 25th Prime Minister of Canada. However, you will need to tread lightly as it is likely that the Opposition will unite to bring down your government at the first politically opportune moment.",
                    "But for now, you can celebrate! With you at the helm, you can steer the government to finally put Canada first, for a change."
                )
                setImage("https://i.imgur.com/jYkYfCa.jpeg")
                setEndSong("Conservative Minority Victory", "Our Home — Brett Kissel", "https://audio.jukehost.co.uk/BDWXkhGUAm5bIX14tgViDbSAPrYYGolq")
            } else {
                description.push(
                    "Whether you will become Prime Minister remains uncertain. Mark Carney can remain Prime Minister as long as he maintains the confidence of Parliament. As it stands, you will need to win over the other opposition parties to force Carney out of office if he doesn’t step down on his own. Failing that, Carney and the Liberals will get to continue governing though their position remains precarious."
                )
                setImage("https://i.imgur.com/bWPXiN4.jpeg")
                setEndSong("Conservative Plurality Defeat", "I'm an Open Road — Paul Brandt", "https://audio.jukehost.co.uk/zJSjmsFWyG5UDthC6l9gGNaSfUBH45VY", )
            }
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

    if (winner.candidate == 301 && winner.electoral_votes >= 172) {
        ctsAchievement("Blue Wave")
    }
    if (winner.candidate == 301 && runnerUp.electoral_votes < winner.electoral_votes && !poilievre_won) {
        ctsAchievement("Sniped")
    }
    return s
}

replaceMusic({
    0: {
        name: "Conservative Campaign",
        tracklist: [
            {
                "name": "The Journey — Paul Brandt",
                "url": "https://audio.jukehost.co.uk/0hC7xtX1eJFTUS60PkjujSuKJQMxLGPh"
            },
            {
                "name": "We're Here For A Good Time (Not A Long Time) — Trooper",
                "url": "https://audio.jukehost.co.uk/1AUi0hzK9Wr2VYnLPRIvrdSEkUVyk74G"
            },
            {
                "name": "Compter les corps — Vulgaires Machins",
                "url": "https://audio.jukehost.co.uk/CW52n3GJcZPjdaUzpFfDj8o621uvy6kF"
            },
            {
                "name": "Summer Of 69 — Bryan Adams",
                "url": "https://audio.jukehost.co.uk/uC0fj6uVXEDfzEExyW33XKIf75CzIZC6"
            },
            {
                "name": "Sk8er Boi — Avril Lavigne",
                "url": "https://audio.jukehost.co.uk/4um0ncgureFMql8rrkHN2JlVZpSnuK6A"
            },
            {
                "name": "Northwest Passage — Stan Rogers",
                "url": "https://audio.jukehost.co.uk/bsfEJn8d6Y932pLQTLm8xU8xDdLaDMSp"
            }
        ]
    }
})
