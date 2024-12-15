export function loadHeader() {
    const headerHTML = `
        <header>
            <div class="header-container">
                <div class="branding">
                    <div class="logo">
                        <a href="#home"><img src="./src/logo.png" alt="Logo" width="52px"></a>
                    </div>
                    <div class="title">
                        <h3>LIVE CONTENT</h3>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><a href="#dashboard">DASHBOARD</a></li>
                        <li><a href="#profile">MY PROFILE</a></li>
                        <li><a href="#contact">TALK TO US</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);
}
