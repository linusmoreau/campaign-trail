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

let singleObserver = new MutationObserver(handleMutations);
singleObserver.observe(document.documentElement, { childList: true, subtree: true });

function ctsAchievement(achievement, difficultyChecker=true){
	if ((difficultyChecker && campaignTrail_temp.difficulty_level_multiplier <= 1) || !difficultyChecker)
		if (campaignTrail_temp.CTS) {
            unlockAchievement(achievement);
        }
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

function replaceMusic(soundtrack) {
    document.getElementById("trackSelParent").remove()
    newMusicPlayer(soundtrack)
}

// Initialise custom music

$("#music_player")[0].children[0].style.display = "none"
$("#music_player")[0].children[1].style.display = "none"

document.getElementById("modLoadReveal").style.display = "none"
document.getElementById("modloaddiv").style.display = "none"

musicBox = document.getElementById("music_player")
musicBox.style.display = ""

var trackSel;
e = campaignTrail_temp
e.selectedSoundtrack = 0

toTime = (seconds) => {
    var date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
}

generateTime = () => {
    // Get the audio element
    var audio = document.getElementById("campaigntrailmusic");
    audio.volume = 0.3

    timeTracker = document.createElement("div");
    timeTracker.style = `
      text-align:left;
      border-style:solid;
      border-width:3px;
      height:150px;
      width:200px;
      background-color:#999999;
      float:right;
      padding: 10px;
    `
    $("#trackSelParent")[0].prepend(timeTracker);
    $("#trackSelParent")[0].prepend(document.createElement("br"));

    // Create a new element to display the current position of the audio
    var positionDisplay = document.createElement("gg");
    positionDisplay.id = "position-display";

    // Create a new slider element to change the time
    var timeSlider = document.createElement("input");
    timeSlider.type = "range";
    timeSlider.min = 0;
    timeSlider.max = 1;
    timeSlider.step = 0.001;
    timeSlider.value = 0;
    timeSlider.style.width = "200px";
    timeSlider.id = "time-slider";

    var pausePlay = document.createElement("button");
    pausePlay.id = "position-display";
    pausePlay.innerHTML = "<b>Pause</b>"
    pausePlay.style.width = "100%";


    pausePlay.addEventListener("click", event => {
        event.preventDefault();
        updatePositionDisplay();
        let audio = document.getElementById("campaigntrailmusic");
        if (audio.paused) {
            audio.play();
            event.target.innerHTML = "<b>Pause</b>";
            return;
        }
        audio.pause();
        event.target.innerHTML = "<b>Play</b>";
        return;
    })

    var volumeLabel = document.createElement("gg");
    volumeLabel.id = "volume-label";
    volumeLabel.innerHTML = "<br><b>Volume: </b>"

    var volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    volumeSlider.min = 0;
    volumeSlider.max = 1;
    volumeSlider.step = 0.001;
    volumeSlider.value = 0;
    volumeSlider.style.width = "200px";
    volumeSlider.id = "volume-slider";

    volumeSlider.value = audio.volume;

    timeTracker.appendChild(pausePlay);
    timeTracker.appendChild(document.createElement("br"));
    timeTracker.appendChild(document.createElement("br"));
    timeTracker.appendChild(positionDisplay);
    timeTracker.appendChild(timeSlider);
    timeTracker.appendChild(volumeLabel);
    timeTracker.appendChild(volumeSlider);

    updatePositionDisplay();

    //for (let i = 0; i < 10; i++)
    //timeTracker.append(document.createElement("br"));


    // Function to update the position display
    function updatePositionDisplay() {
        positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
        timeSlider.value = audio.duration ? audio.currentTime / audio.duration : 0;
    }

    // Function to change the time of the audio
    function changeTime() {
        positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
        audio.currentTime = timeSlider.value * audio.duration;
    }

    updateVolume = event => {
        audio.volume = event.target.value;
    }

    // Update the position display and slider every second
    setInterval(updatePositionDisplay, 1000);

    // Listen for changes to the time slider and change the time of the audio
    timeSlider.addEventListener("input", changeTime);
    volumeSlider.addEventListener("input", updateVolume)
}

function newMusicPlayer(soundtracks) {
    trackSel = document.createElement("div");
    trackSel.id = "trackSelParent"
    let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#999999;float:right;">`
    z += `<b><select id='selectSoundtrack'><option value='` + soundtracks[e.selectedSoundtrack].name + `'>` + soundtracks[e.selectedSoundtrack].name + "</option>"
    for (i in soundtracks) {
        if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
            z += `<option value='` + soundtracks[i].name + `'>` + soundtracks[i].name + `</option>`
        }
    }
    z += `</select></b><br><br>`
    // <label><input type="radio" name="option" value="option1">Option 1</label><br>
    for (i in soundtracks[e.selectedSoundtrack].tracklist) {
        let a = soundtracks[e.selectedSoundtrack].tracklist[i]
        let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="` + i + `">` + a.name + `</label><br>`
        z += b
    }
    z += "</div><br><br>"
    trackSel.innerHTML = z

    // select correct song

    musicBox.appendChild(trackSel);
    Array.from(document.getElementById("trackSel").children).filter(f => {
        return f.tagName == "LABEL"
    }).map(f => f.children[0])[0].checked = true

    // set soundtrack changer

    soundtrackSelector = document.getElementById("selectSoundtrack")
    soundtrackSelector.onchange = function () {
        for (i in soundtracks) {
            if (soundtracks[i].name == soundtrackSelector.value) {
                e.selectedSoundtrack = i
                break
            }
        }
        document.getElementById("trackSelParent").remove()
        newMusicPlayer(soundtracks)
    }

    var matches = document.querySelectorAll('.trackSelector');

    for (match in matches) {
        matches[match].onchange = function () {
            audio = $("#campaigntrailmusic")[0];
            audio.src = soundtracks[e.selectedSoundtrack].tracklist[this.value].url
            audio.currentTime = 0
        }
    }

    musicBox.children[2].loop = false
    musicBox.children[2].src = soundtracks[e.selectedSoundtrack].tracklist[0].url

    musicBox.children[2].onended = function () {
        console.log("next track")
        if (soundtracks[e.selectedSoundtrack].tracklist.length == 1) {
            audio = $("#campaigntrailmusic")[0];
            audio.currentTime = 0
            audio.play()
            return
        }
        let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
        let newSel = clamp(selected + 1, soundtracks[e.selectedSoundtrack].tracklist.length - 1, 0)
        let buttons = Array.from(document.getElementById("trackSel").children).filter(f => {
            return f.tagName == "LABEL"
        }).map(f => f.children[0])
        //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
        buttons[newSel].click()
    }

    for (w = 0; w < 7; w++) {
        document.getElementById("trackSelParent").appendChild(document.createElement("br"))
    }

    generateTime();
}

clamp = function (a, max, min, overflow = true) {
    if (overflow) {
        return a > max ? min : a < min ? max : a;
    }
    return a > max ? max : a < min ? min : a;
}

applyTooltipsToObject(campaignTrail_temp.questions_json);
applyTooltipsToObject(campaignTrail_temp.answers_json);
applyTooltipsToObject(campaignTrail_temp.answer_feedback_json);