let observerRunning = false;
let processedNodes = new Set();
const scrollableElementIds = ["overall_result", "state_result", "state_info", "main_content_area", "final_results_description"];
let campaign_sign = null;

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

    // change campaign sign
    if (campaign_sign) {
        const oldSign = document.getElementById('campaign_sign');
        if (oldSign) {
            const newSign = document.createElement('img');
            newSign.src = campaign_sign;
            newSign.style.height = "65%";
            oldSign.replaceWith(newSign)
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

function nextTrack() {
    console.log("next track")
    e = campaignTrail_temp
    audio = $("#campaigntrailmusic")[0];
    tracklist_length = e.soundtracks[e.selectedSoundtrack].tracklist.length;
    if (tracklist_length == 1) {
        audio.currentTime = 0
        audio.play()
        return
    }
    let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
    var newSel;
    if (audio.shuffle) {
        newSel = Math.floor(Math.random() * (tracklist_length - 1));
        if (newSel >= selected) {
            newSel += 1;
        }
    } else {
        newSel = clamp(selected + 1, tracklist_length - 1, 0);
    }
    let buttons = Array.from(document.getElementById("trackSel").children).filter(f => {
        return f.tagName == "LABEL"
    }).map(f => f.children[0])
    buttons[newSel].click()
}

generateTime = () => {
    // Get the audio element
    e = campaignTrail_temp
    var audio = document.getElementById("campaigntrailmusic");

    timeTracker = document.createElement("div");
    timeTracker.style = `
      text-align:left;
      border-style:solid;
      border-width:3px;
      height:180px;
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
    pausePlay.style.margin = "2px";
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

    var shuffle = document.createElement("button");
    shuffle.id = "shuffle-button";
    shuffle.innerHTML = audio.shuffle ? "<b>Unshuffle</b>" : "<b>Shuffle</b>";
    shuffle.style.width = "100%";
    shuffle.style.margin = "2px";
    shuffle.addEventListener("click", event => {
        event.preventDefault();
        audio = document.getElementById("campaigntrailmusic");
        if (audio.shuffle) {
            audio.shuffle = false;
            event.target.innerHTML = "<b>Shuffle</b>"
            return;
        }
        audio.shuffle = true;
        event.target.innerHTML = "<b>Unshuffle</b>"
    })

    var skipButton = document.createElement("button");
    skipButton.id = "skip-button";
    skipButton.innerHTML = "<b>Skip</b>"
    skipButton.style.width = "50%";
    skipButton.style.margin = "2px"; // Add margin
    skipButton.addEventListener("click", event => {
        event.preventDefault();
        nextTrack();
    })

    var loopButton = document.createElement("button");
    loopButton.id = "loop-button";
    loopButton.innerHTML = audio.loopEnabled ? "<b>Unloop</b>" : "<b>Loop</b>";  // Check the initial loop state
    loopButton.style.width = "50%";  // Match the width with skipButton
    loopButton.style.margin = "2px";
    loopButton.addEventListener("click", event => {
        event.preventDefault();
        audio = document.getElementById("campaigntrailmusic");
        audio.loopEnabled = !audio.loopEnabled;
        audio.loop = audio.loopEnabled;  // Set the audio's loop property
        event.target.innerHTML = audio.loopEnabled ? "<b>Unloop</b>" : "<b>Loop</b>";  // Toggle the button text
    });

    var buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex"; // Makes children inline
    buttonContainer.style.justifyContent = "space-between";
    skipButton.style.flex = "1"; // Makes it take up equal space
    skipButton.style.marginRight = "5px"; // Adds some space between the buttons

    loopButton.style.marginRight = "0px";

    buttonContainer.appendChild(skipButton);
    buttonContainer.appendChild(loopButton);

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
    timeTracker.appendChild(shuffle);
    timeTracker.appendChild(buttonContainer);
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
    campaignTrail_temp.soundtracks = soundtracks;
    trackSel = document.createElement("div");
    trackSel.id = "trackSelParent"
    let z = `<div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:500px;background-color:#999999;float:right;">`
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

    musicBox.children[2].onended = nextTrack;

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

playing_end_music = false
function replaceMusic(soundtrack, end_music=false) {
    if (playing_end_music) {
        return
    }
    if (end_music) {
        playing_end_music = true
    }
    document.getElementById("trackSelParent").remove()
    newMusicPlayer(soundtrack)
}

function setEndSong(name, title, url) {
    replaceMusic({
        0: {
            name: name,
            tracklist: [
                {
                    name: title,
                    url: url
                }
            ]
        }
    }, true)
}

applyTooltipsToObject(campaignTrail_temp.questions_json);
applyTooltipsToObject(campaignTrail_temp.answers_json);
applyTooltipsToObject(campaignTrail_temp.answer_feedback_json);