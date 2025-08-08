campaignTrail_temp.candidate_image_url = "https://i.imgur.com/Fcsxxji.jpeg";
campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/MVBYnzH.jpeg";
campaignTrail_temp.candidate_last_name = "Liberal";
campaignTrail_temp.running_mate_last_name = "Carney";

let observerRunning = false;
let processedNodes = new Set();
const scrollableElementIds = ["overall_result", "state_result", "state_info", "main_content_area", "final_results_description"];

async function handleMutations(mutationsList, observer) {
    if (observerRunning) return;
    observerRunning = true;

    // stop observing
    observer.disconnect();

    // addScrollbar
    for (const scrollableElementId of scrollableElementIds) {
        const overallResult = document.getElementById(scrollableElementId);
        if (overallResult && !processedNodes.has(overallResult)) {
            overallResult.style.overflow = 'auto';
            const buttons = document.querySelectorAll('#view_electoral_map, #answer_select_button, #ok_button, #final_election_map_button');
            const handleClick = () => {
                overallResult.style.overflow = 'auto';
            };
            buttons.forEach(button => button.addEventListener('click', handleClick));
            processedNodes.add(overallResult);
        }
    }

    // Resume observing
    observer.observe(document.documentElement, { childList: true, subtree: true });
    observerRunning = false;
}

function ctsAchievement(achievement, difficultyChecker=true){
	if ((difficultyChecker && campaignTrail_temp.difficulty_level_multiplier <= 1) || !difficultyChecker)
		if (campaignTrail_temp.CTS) {
            unlockAchievement(achievement);
        }
}

let singleObserver = new MutationObserver(handleMutations);
singleObserver.observe(document.documentElement, { childList: true, subtree: true });

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
        setMusic("https://www.youtube-nocookie.com/embed/71S9ou2gcqE?autoplay=1")
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
            setImage("https://i.imgur.com/0tmKUV5.jpeg")
            setMusic("https://www.youtube-nocookie.com/embed/OSR4WpqyXxs?autoplay=1")
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
            setMusic("https://www.youtube-nocookie.com/embed/t5nJ_mg_yMo?autoplay=1&start=10")
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
    if (winner.candidate == 300 && winner.popular_votes < runnerUp.popular_votes) {
        ctsAchievement("Three in a Row")
    }
    if (winner.candidate == 300 &&
        campaignTrail_temp.player_answers[8] == 4091 &&
        campaignTrail_temp.player_answers[29] == 4303) {
        ctsAchievement("Carbon Tax Carney")
    }
    return s
}

musicPlaying = false;
// Function to create a new YouTube music player
function setMusic(songChoice, replace=false) {
    if (musicPlaying && !replace) return;

    // Get the first element with the class "footer"
    var musicBox = document.getElementsByClassName("footer")[0];

    // Check if the element exists to avoid errors
    if (!musicBox) {
        console.error("Element with class 'footer' not found.");
        return;
    }

    // Remove any existing YouTube player containers
    var existingPlayers = musicBox.getElementsByClassName("youtube-player-container");
    while (existingPlayers.length > 0) {
        musicBox.removeChild(existingPlayers[0]);
    }

    // Create a container for the YouTube player
    var youtubePlayerContainer = document.createElement("div");
    youtubePlayerContainer.className = "youtube-player-container"; // Add a class for easier selection
    youtubePlayerContainer.style = "border: none; background: transparent;";

    // Insert the YouTube iframe player
    var youtubeIframe = document.createElement("iframe");
    youtubeIframe.width = "352";
    youtubeIframe.height = "198";
    youtubeIframe.src = songChoice;
    youtubeIframe.title = "YouTube video player";
    youtubeIframe.frameborder = "0";
    youtubeIframe.style = "position: relative; left: -10px;";
    youtubeIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    youtubeIframe.setAttribute("allowfullscreen", "");

    // Append the iframe to the container
    youtubePlayerContainer.appendChild(youtubeIframe);

    // Add the YouTube player container to the music box
    musicBox.appendChild(youtubePlayerContainer);

    musicPlaying = true;
}

function getTooltips(str) {
    let matches = [];

    tooltipList.forEach((tooltip, index) => {
        // Adjust the regex to match searchString potentially surrounded by “ and followed by optional punctuation
       let regex = new RegExp(`(?<=\\b|\\s|^|“)${tooltip.searchString}(?=[.,;!?]?\\b|\\s|”|$)`, 'g');


        let match;
        while ((match = regex.exec(str)) !== null) {
            matches.push({
                start: match.index + (match[0].startsWith('“') ? 1 : 0), // Adjust for potential starting “
                end: match.index + match[0].length - (match[0].endsWith('”') ? 1 : 0) - (match[2] ? 1 : 0), 
                tooltipIndex: index
            });
        }
    });

    // Sort by starting position; if two start at the same position, longer match comes first
    matches.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));

    // Filter out overlaps
    for (let i = 0; i < matches.length - 1; ) {
        if (matches[i + 1].start < matches[i].end) {
            matches.splice(i + 1, 1); // Remove the next match since it overlaps
        } else {
            i++; // Move to next match
        }
    }

    return matches;
}

function applyTooltips(str) {
    const matches = getTooltips(str);
    let result = '';
    let lastIndex = 0;

    matches.forEach(match => {
        const tooltip = tooltipList[match.tooltipIndex];
        result += str.slice(lastIndex, match.start);
        result += `<span class='mytooltip'>${tooltip.searchString}<span class='mytooltiptext'>${tooltip.explanationText}</span></span>`;
        lastIndex = match.end;
    });

    result += str.slice(lastIndex); // Add the remainder of the original string
    return result;
}

function applyTooltipsToObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            obj[key] = applyTooltips(obj[key]);
        } else if (typeof obj[key] === 'object') {
            applyTooltipsToObject(obj[key]); // Recursive call
        }
    }
}

applyTooltipsToObject(campaignTrail_temp.questions_json);
applyTooltipsToObject(campaignTrail_temp.answers_json);
applyTooltipsToObject(campaignTrail_temp.answer_feedback_json);
