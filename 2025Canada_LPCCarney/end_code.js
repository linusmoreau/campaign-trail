campaignTrail_temp.candidate_image_url = "https://i.imgur.com/mtNuqWt.jpeg";
campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/MVBYnzH.jpeg";
campaignTrail_temp.candidate_last_name = "Liberal";
campaignTrail_temp.running_mate_last_name = "Carney";

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

    winner = aa[0];
    runnerUp = aa[1];
    if (winner.candidate == 300 || (runnerUp.candidate == 300 && runnerUp.electoral_votes == winner.electoral_votes)) {
        if (winner.electoral_votes >= 172) {
            header = "Liberal Majority Government!";
            description = [
                "A few months ago, the Liberal Party was down in the dumps, and electoral defeat was all but certain. Despite the herculean task of bringing back a party from death's door, you went for it. With your experienced background and disciplined campaign, you pulled through.",
                "Your premiership will not be an easy one. You have a trade war to fight against President Trump, a housing crisis to resolve, and a sluggish economy to revive. Canadians have high hopes for you. Don't let them down.",
                "With a majority in the House of Commons, you will have an easier time passing your reforms and can count on being able to serve out your full four year term. But don't get complacent. You still need to collaborate with the provinces, First Nations, and the business community to make your vision reality. One wrong step can bleed your goodwill away.",
                "But for now, you've won! Tonight you can celebrate, but tomorrow the work begins to build Canada strong."
            ]
            if (poilievre_won) {
                description[0] += " Not only did you beat Poilievre, you won a majority government."
            } else {
                description[0] += " Not only did you beat Poilievre, you defeated him in his own constituency of Carleton and won a majority government."
            }
        } else {
            // This outcome also occurs in the case of a Liberal tie for first
            header = "Liberal Minority Government!";
            description = [
                "A few months ago, the Liberal Party was down in the dumps, and electoral defeat was all but certain. Despite the herculean task of bringing back a party from death's door, you went for it. With your experienced background and disciplined campaign, you pulled through. Though a few Liberals are disappointed that you didn't win a majority government, most are jubilant to have won at all.",
                "Your premiership will not be an easy one. You have a trade war to fight against President Trump, a housing crisis to resolve, and a sluggish economy to revive. Canadians have high hopes for you. Don't let them down.",
                "Without a majority in the House of Commons, you will need to work with the opposition parties to pass your reforms. With the average lifespan of a minority government at two years, you have your work cut out for you to maintain parliamentary confidence and avoid an early end to your governance.",
                "But for now, you've won! Tonight you can celebrate, but tomorrow the work begins to build Canada strong."
            ];
            if (!poilievre_won) {
                description[0] += " Not only did you beat Poilievre, you defeated him in his own constituency of Carleton."
            }
        }
        setImage("https://i.imgur.com/MVBYnzH.jpeg")
        setEndSong("Liberal Victory", "Whoa Is Me — Down With Webster", "https://audio.jukehost.co.uk/SKrMJUtMdJ3DcQlBJBXLlGj4fIetCuKc")
    } else if (winner.candidate == 301) {
        if (winner.electoral_votes >= 172) {
            header = "Conservative Majority Government!";
            description = [
                "You lost. Pierre Poilievre will be the 25th Prime Minister of Canada. Seeing where your Liberal party was a few months ago, perhaps this result was inevitable. That doesn't stop many Liberal partisans feeling like you fumbled the ball. Nevertheless, you could try to stay on as Liberal leader. Who knows, you might do better next time around.",
                "With the Conservative back in power, you can only hope that Poilievre refrains from doing the worst that he is accused of sympathising with. All you can do is watch as he seeks to negotiate a new trade agreement with President Trump and implements his own solutions for housing and the economy.",
                "Moving forward, your options are open. You could stay on and keep Poilievre accountable from the opposition benches, or you could quit politics altogether and return to the private sector. The choice is yours."
            ];
            if (!carney_won) {
                description[0] += " However, the fact you lost in your own constituency of Nepean doesn't inspire confiedence."
            }
            setImage("https://i.imgur.com/jYkYfCa.jpeg")
            setEndSong("Liberal Defeat", "So Cold — Down With Webster", "https://audio.jukehost.co.uk/roPImzN733i08vW75k9Bqy5JKMxc2vO0")
        } else {
            header = "Conservative Plurality!";
            description = [
                "A few months ago, the Liberal Party was down in the dumps, and electoral defeat was all but certain. Despite the herculean task of bringing back a party from death's door, you went for it. Despite failing to win a plurality of seats, you managed to hold back the Conservatives from winning a majority government. Though some Liberal partisans are disappointed that you didn't win the election outright, most are relieved that you have prevented Conservative majority rule.",
                "You have a few options. As the incumbent Prime Minister, you could try to stay on with the tolerance of the smaller parties. This could inflame public sentiment as it would appear to be ignoring the will of the voters. It would also be precarious as your parliamentary allies could pull the plug at any moment.",
                "Alternatively, you could resign and allow Pierre Poilievre to become the 25th Prime Minister of Canada. With the Conservatives lacking a majority government, you could hold them to account, prevent the most harmful policies from becoming law, and strike at an opportune moment to send the Conservatives back into Opposition.",
                "The choice is yours. But whichever you choose, you will have to maneuver carefully to stay ascendant in Canadian politics."
            ];
            if (!carney_won) {
                description[1] += " This will be particularly difficult seeing as you lost in your own constituency of Nepean."
            }
            if (!poilievre_won) {
                description[0] += " Your partisans take a special pleasure that Poilievre was defeated in his own constituency of Carleton."
            }
            setImage("https://i.imgur.com/bWPXiN4.jpeg")
            setEndSong("Conservative Plurality Indecision", "Feel So Alive — Down With Webster", "https://audio.jukehost.co.uk/QrOsksv3KaRmnFdi3KHMAKlA9J0tlqwd")
        }
    }
    s = `<h2>${header}</h2>`
    for (desc of description) {
        s += `<p>${desc}</p>`
    }

    if (winner.candidate == 300 && winner.electoral_votes >= 192) {
        ctsAchievement("Carnegeddon")
    }
    if (winner.candidate == 300 && 
        winner.electoral_votes >= 172 && 
        campaignTrail_temp.player_answers[14] == 4152 && 
        campaignTrail_temp.player_answers[31] == 4324) {
        ctsAchievement("Real Change")
    }
    if (winner.candidate == 300 &&
        campaignTrail_temp.player_answers[8] == 4091 &&
        campaignTrail_temp.player_answers[29] == 4303) {
        ctsAchievement("Carbon Tax Carney")
    }
    return s
}

replaceMusic({
    0: {
        name: "Liberal Campaign",
        tracklist: [
            {
                "name": "Parade Music — Down With Webster",
                "url": "https://audio.jukehost.co.uk/TEGjDuyyNhm5WuVQtkBUJGej2j0wNQxn"
            },
            {
                "name": "Time To Win — Down With Webster",
                "url": "https://audio.jukehost.co.uk/WuY18jSgJhSOCYoP4WEMMcfYLGXSg9r3"
            },
            {
                "name": "Comme des enfants — Cœur de pirate",
                "url": "https://audio.jukehost.co.uk/oZlSUqO4E6MVdsElT8ms0X5DrdKk9fck"
            },
            {
                "name": "I Fought the Law — The Clash",
                "url": "https://audio.jukehost.co.uk/OJ8SfTGcDp6nCojfbcT02WYMoYmYz6iq"
            },
            {
                "name": "I Love It — Icona Pop + Charli XCX",
                "url": "https://audio.jukehost.co.uk/IQqFfy4xViEAxFZmRue17xJnLvCpAzrs"
            },
            {
                "name": "King Richard! — King Richard's Army",
                "url": "https://audio.jukehost.co.uk/z5kveX8uvdFUlkwsWkEz3MA3Rs71gnr6"
            }
        ]
    }
})
