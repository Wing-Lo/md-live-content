export function loadConfigurePage() {
    const mainContent = $("main");

    mainContent.html(`
        <div class="branded-wrapper">
            <div class="configure-container">
                <h2>Configure</h2>
                <p>Choose below to create a new configuration or use an existing saved configuration</p>
                <form class="configure-form">
                    <div class="radio-group">
                        <label>
                            <input type="radio" name="configurationOption" value="new" required>
                            Create a New Configuration
                        </label>
                        <label>
                            <input type="radio" name="configurationOption" value="existing">
                            Use an Existing Saved Configuration
                        </label>
                    </div>
                    <div id="dropdown-container" class="hidden">
                        <select id="dropdown1" name="dropdown1">
                            <option value="option1">Live Timer - Christmas</option>
                            <option value="option2">Live Poll - New Year</option>
                        </select>
                    </div>
                    <button type="submit">NEXT</button>
                </form>
            </div>
        </div>
    `);

    const $radioButtons = $('input[name="configurationOption"]');
    const $dropdownContainer = $("#dropdown-container");
    const $configureForm = $(".configure-form");

    $configureForm.on("submit", (e) => {
        e.preventDefault();
        const selectedOption = $('input[name="configurationOption"]:checked').val();

        if (selectedOption === "new") {
            import("./newCampaign.js")
                .then((module) => {
                    module.loadNewCampaign();
                })
                .catch((err) => console.error("Error loading new campaign:", err));
        } else {
            console.log("Existing configuration selected");
        }
    });

    $radioButtons.on("change", function () {
        if ($(this).val() === "existing") {
            $dropdownContainer.removeClass("hidden");
        } else {
            $dropdownContainer.addClass("hidden");
        }
    });
}
