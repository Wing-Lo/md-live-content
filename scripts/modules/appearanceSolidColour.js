import { loadAppearanceImage } from "./appearanceImage.js";
import { loadBackground } from "./background.js";

export function loadAppearanceSolidColour() {
    const mainContent = $("main");

    mainContent.html(`
        <div class="container">
            <h2>LiveTimer Appearance</h2>
        
            <div class="settings-form">
                <div class="form-container">
                    <div class="form-row-label">
                        <label style="margin-left: 45px">Font</label>
                        <label style="margin-left: 72px">Size</label>
                        <label style="margin-left: 38px">Colour</label>
                        <label style="margin-left: 17px">X Pos.</label>
                        <label style="margin-left: 62px">Y Pos.</label>
                        <label style="margin-left: 53px">Spacing</label>
                    </div>
                    <div class="form-row-time">
                        <label>Time</label>
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
                    <div class="form-row-unit">
                        <label>Unit</label>
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
                        <input type="number" value="12" /> pt
                        <input type="color" />
                        <input type="number" value="28" /> pt
                        <input type="number" value="28" /> pt
                        <input type="number" value="28" /> pt
                    </div>
                    </div>

                    <div class="solid-color-timer">
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
        loadBackground();
    });

    $(".btn-next").on("click", () => {
        loadAppearanceImage();
    });
}
