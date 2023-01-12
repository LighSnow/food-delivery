import Swiper, { Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "./../styles/login.scss";

const reviewsSlider = new Swiper(".js-reviews-slider", {
    modules: [Pagination],
    speed: 500,
    spaceBetween: 30,
    pagination: {
        el: ".js-reviews-slider-pagination",
        clickable: true,
    },
});

const showPassword = ({ currentTarget }) => {
    const input = currentTarget.previousElementSibling;

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
};

document.querySelector(".js-show-pass").addEventListener("click", showPassword);
