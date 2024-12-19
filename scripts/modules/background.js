import { loadAppearanceSolidColour } from "./appearanceSolidColour.js";
import { loadBasicSetting } from "./basicSetting.js";

export function loadBackground() {
    const mainContent = $("main");

    mainContent.html(`
        <div class="container">
            <h2>Background</h2>
            <p class="subtitle">(Recommended sizes: 200×70, 300×100, 400×130 or 600×200)</p>
            
            <div class="settings-form">
                <div class="background-options">
                    <div class="option-box selected">
                        <div class="radio-group">
                            <label>
                                <input type="radio" name="backgroundOption" value="solid" checked>
                                Use Solid Colour
                                <input class="color-picker" type="color" value="#4C969B">
                            </label>
                        </div>
                        <div class="dimension-section">
                            <h3>Dimension</h3>
                            <select class="dimension-select">
                                <option value="200x70">200×70</option>
                                <option value="300x100">300×100</option>
                                <option value="400x130">400×130</option>
                                <option value="600x200">600×200</option>
                            </select>
                        </div>
                    </div>

                    <div class="option-box">
                        <div class="radio-group">
                            <label>
                                <input type="radio" name="backgroundOption" value="image">
                                Upload Image
                            </label>
                        </div>
                        <div class="upload-area">
                            <div class="upload-placeholder">
                                <img src="./src/upload-icon.png" alt="Upload">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="button-container">
                    <button type="button" class="btn-back">BACK</button>
                    <button type="button" class="btn-next">NEXT</button>
                </div>
            </div>
        </div>
    `);

    // Handle radio button changes
    $('input[name="backgroundOption"]').on("change", function () {
        const selectedValue = $(this).val();
        $(".option-box").removeClass("selected");
        $(this).closest(".option-box").addClass("selected");
    });

    // Handle back button
    $(".btn-back").on("click", () => {
        loadBasicSetting();
    });

    $(".btn-next").on("click", () => {
        loadAppearanceSolidColour();
    });
}
