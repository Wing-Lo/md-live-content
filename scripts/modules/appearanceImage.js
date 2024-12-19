import { loadAppearanceSolidColour } from "./appearanceSolidColour.js";

export function loadAppearanceImage() {
    const mainContent = $("main");

    mainContent.html(`
        <div class="container">
            <h2>LiveTimer Appearance</h2>
        
            <div class="settings-form">
                <div class="form-container">
                    <div class="pop-up-setting">
                        <div class="pop-up-label">
                        <label style="margin-left: 59px">Font</label>
                        <label style="margin-left: 72px">Size</label>
                        <label style="margin-left: 36px">Colour</label>
                        <label style="margin-left: 10px">X Pos.</label>
                        <label style="margin-left: 55px">Y Pos.</label>
                        <label style="margin-left: 49px">Spacing</label>
                    </div>
                    <div class="pop-up-input">
                        <select class="font-selector">
                            <option value="Lato" selected>Lato</option>
                            <option value="Arial">Arial</option>
                            <option value="Verdana">Verdana</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Courier New">Courier New</option>
                            <option value="Tahoma">Tahoma</option>
                            <option value="Roboto">Roboto</option>
                        </select>
                        <input type="number" value="36" /> pt
                        <input type="color" />
                        <input type="number" value="28" /> pt
                        <input type="number" value="28" /> pt
                        <input type="number" value="28" /> pt
                    </div>
                    </div>
                    </div>
                    <div class="wrapped-label-row">
                        <div class="wrapped-label">Days / Hr
                            <img src="./assets/icons/options-icon.svg" alt="Options icon" class="option-icon">
                        </div>
                        <div class="wrapped-label">Hr / Min
                            <img src="./assets/icons/options-icon.svg" alt="Options icon" class="option-icon">
                        </div>
                        <div class="wrapped-label">Min / Sec
                            <img src="./assets/icons/options-icon.svg" alt="Options icon" class="option-icon">
                        </div>
                    </div>
                    <div class="icon-container">
                    <div class="image-timer">
                    </div>
                <div class="button-container">
                    <button type="button" class="btn-back">BACK</button>
                    <button type="button" class="btn-next">NEXT</button>
                </div>
            </div>
        </div>
    `);

    // Handle back button
    $(".btn-back").on("click", () => {
        loadAppearanceSolidColour();
    });
}
