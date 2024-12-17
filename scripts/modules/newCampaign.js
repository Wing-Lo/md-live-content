import { loadConfigurePage } from "./configure.js";
import { loadBasicSetting } from "./basicSetting.js";

async function loadSvg(iconPath) {
    try {
        const response = await fetch(iconPath);
        const svgText = await response.text();
        return svgText;
    } catch (error) {
        console.error("Error loading SVG:", error);
        return "";
    }
}

export async function loadNewCampaign() {
    const mainContent = $("main");

    // Load all SVGs first
    const pollsIcon = await loadSvg("./assets/icons/polls-icon.svg");
    const scrapeIcon = await loadSvg("./assets/icons/scrape-icon.svg");
    const timerIcon = await loadSvg("./assets/icons/timer-icon.svg");

    mainContent.html(`
        <div class="container">
            <h2>Create New Campaign</h2>
            <p>Select the real-time elements you would like to include in your new campaign below.</p>
            <div class="campaign-options">
                <div class="campaign-item" data-type="polls">
                    <div class="item-border">
                        <img src="./assets/icons/polls-icon.svg" alt="Live Polls icon" class="campaign-icon">
                        <p>LivePolls</p>
                    </div>
                </div>
                <div class="campaign-item" data-type="scrape">
                    <div class="item-border">
                        <img src="./assets/icons/scrape-icon.svg" alt="Live Scrape icon" class="campaign-icon">
                        <p>LiveScrape</p>
                    </div>
                </div>
                <div class="campaign-item" data-type="timer">
                    <div class="item-border">
                        <img src="./assets/icons/timer-icon.svg" alt="Live Timer icon" class="campaign-icon">
                        <p>LiveTimer</p>
                    </div>
                </div>
            </div>

            <div class="button-container">
                <button type="button" class="btn-back">BACK</button>
                <button type="submit" class="btn-next">NEXT</button>
            </div>
        </div>
    `);

    // Add click handlers for campaign items
    $(".campaign-item").on("click", function () {
        $(".campaign-item").removeClass("selected");
        $(this).addClass("selected");
    });

    // Add click handler for back button
    $(".btn-back").on("click", () => {
        loadConfigurePage();
    });

    $(".btn-next").on("click", () => {
        const selectedType = $(".campaign-item.selected").data("type");
        if (selectedType) {
            loadBasicSetting(selectedType);
        } else {
            // Show error or notification that user needs to select an option
            alert("Please select a campaign type");
        }
    });
}
