export function loadFooter() {
    const footerHTML = `
        <footer>
            <p>&copy; Copyright 2024 Marketing Decisions Pty Ltd</p>
        </footer>
    `;

    $("body").append(footerHTML);
}
