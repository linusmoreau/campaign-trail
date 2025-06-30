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
