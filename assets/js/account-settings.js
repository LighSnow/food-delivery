import "./../styles/account-settings.scss";

import toggleMenu from "./common/toggle-menu";

document.querySelectorAll(".js-menu-toggle").forEach(button => {
    button.addEventListener("click", toggleMenu);
});
