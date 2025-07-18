campaignTrail_temp.candidate_image_url = "https://i.imgur.com/Fcsxxji.jpeg";
campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/MVBYnzH.jpeg";
campaignTrail_temp.candidate_last_name = "Liberal";
campaignTrail_temp.running_mate_last_name = "Carney";

let observerRunning = false;
let processedNodes = new Set();
const scrollableElementIds = ["overall_result", "state_result", "state_info"];

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

    winner = aa[0];
    if (winner.candidate == 300) {
        if (winner.electoral_votes >= 172) {
            header = "Liberal Majority Government!";
            description = "TODO";
        } else {
            header = "Liberal Minority Government!";
            description = "TODO";
        }
        setImage("https://i.imgur.com/MVBYnzH.jpeg")
        setMusic("https://www.youtube-nocookie.com/embed/71S9ou2gcqE?autoplay=1")
    } else if (winner.candidate == 301) {
        if (winner.electoral_votes >= 172) {
            header = "Conservative Majority Government!";
            description = "TODO";
            setMusic("https://www.youtube-nocookie.com/embed/OSR4WpqyXxs?autoplay=1")
        } else {
            header = "Conservative Plurality!";
            description = "TODO";
            setMusic("https://www.youtube-nocookie.com/embed/t5nJ_mg_yMo?autoplay=1;start=10")
        }
        // TODO set image
        
    }
    return `<h2>${header}</h2><p>${description}</p>`
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
