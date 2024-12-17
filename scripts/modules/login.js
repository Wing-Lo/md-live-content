import { loadConfigurePage } from "./configure.js";

export function loadLoginPage() {
    const mainContent = $("main");

    mainContent.html(`
        <div class="branded-wrapper">
            <div class="login-container">
                <p>Please login using your MD Live Content credentials.</p>
                <form class="login-form">
                    <input type="text" placeholder="User Name" name="username" required>
                    <input type="password" placeholder="Password" name="password" required>
                    <button type="submit">LOG IN</button>
                </form>
                <p class="forgot-password"><a href="#">Forgotten password? Contact Marketing Decisions</a></p>
            </div>
        </div>
    `);

    $("body").on("submit", ".login-form", (e) => {
        e.preventDefault();
        loadConfigurePage();
    });
}
