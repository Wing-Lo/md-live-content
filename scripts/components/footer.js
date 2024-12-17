export function loadFooter() {
    const footerHTML = `
        <footer>
            <div class="footer-container">
                <p>&copy; Copyright 2024 Marketing Decisions Pty Ltd</p>
            </div>
        </footer>
    `;

    $("body").append(footerHTML);
}
