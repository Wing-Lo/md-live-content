import { loadHeader } from "./components/header.js";
import { loadFooter } from "./components/footer.js";
import { loadLoginPage } from "./modules/login.js";

$(() => {
    loadHeader();
    loadLoginPage();
    loadFooter();
});
