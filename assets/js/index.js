import "./../styles/index.scss";

import toggleMenu from "./common/toggle-menu";


document.querySelectorAll(".js-menu-toggle").forEach(button => {
    button.addEventListener("click", toggleMenu);
});

document.querySelectorAll(".js-restaurants-button").forEach(button => {
    button.addEventListener("click", ({ target }) => {
        toggleActiveClass(target);
    });
});

const toggleActiveClass = button => {
    button.classList.toggle("active");
};
