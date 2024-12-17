import { loadNewCampaign } from "./newCampaign.js";
import { loadBackground } from "./background.js";
export function loadBasicSetting() {
    const mainContent = $("main");

    mainContent.html(`
        <div class="container">
            <h2>Basic Settings</h2>
            
            <div class="settings-form">
                <div class="setting-section">
                    <h3>Linking</h3>
                    <div class="radio-group">
                        <label>
                            <input type="radio" name="linkingOption" value="embed">
                            Embed image only, no clickthrough action
                        </label>
                        <label>
                            <input type="radio" name="linkingOption" value="url" checked>
                            Link to URL on clickthrough
                        </label>
                    </div>
                    <div class="url-input">
                        <input type="url" placeholder="Enter URL" class="full-width-placeholder">
                    </div>
                </div>

                <div class="setting-section">
                    <h3>Alt Text</h3>
                    <input type="text" 
                        class="full-width-placeholder" 
                        placeholder="This text will be read by screenreaders, and displayed when images are disable.">
                </div>

                <div class="button-container">
                    <button type="button" class="btn-back">BACK</button>
                    <button type="button" class="btn-next">NEXT</button>
                </div>
            </div>
        </div>
    `);

    // Handle radio button change
    $('input[name="linkingOption"]').on("change", function () {
        if ($(this).val() === "url") {
            $(".url-input").show();
        } else {
            $(".url-input").hide();
        }
    });

    // Handle back button
    $(".btn-back").on("click", () => {
        loadNewCampaign();
    });

    $(".btn-next").on("click", () => {
        loadBackground();
    });
}
