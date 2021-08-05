"use strict";

const activeButton = document.querySelector(".second-line__menu-item"),
      burgermenu = document.querySelector(".burger-menu"),
      burger = document.querySelector(".second-line__burger"),
      closeburger = document.querySelector(".close-button"),
      body = document.body;

burger.addEventListener("click", () => {
    burgermenu.classList.remove("hide");
    burgermenu.classList.add("show");
    body.style.overflowY = "hidden";
});

closeburger.addEventListener("click", () => {
    burgermenu.classList.remove("show");
    burgermenu.classList.add("hide");
    body.style.overflowY = "scroll";
});

const swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    autoplay: {
        delay: 3500,
    },
    allowTouchMove: true,

    breakpoints: {
        376: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 3,
        },
        1109: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 3,
        },
    },
});

const swiper2 = new Swiper(".mySwiper2", {
    breakpoints: {
        376: {
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
        767: {
            slidesPerView: 3,
            slidesPerColumn: 1,
        },
        1109: {
            slidesPerView: 3,
            slidesPerColumn: 1,
        },
        1500: {
            slidesPerView: 4,
            slidesPerColumn: 2,
        },
    },
    allowTouchMove: true,
    resizeReInit: true,
    watchOverflow: true,
});

// activeButton.addEventListener('mouseover', activeBtn, false);
// activeButton.addEventListener('mouseout', nonActiveBtn, false);

// function activeBtn() {
//     activeButton.setAttribute("style", "background-color:white");
// }

// function nonActiveBtn() {
//     activeButton.setAttribute("style", "bacground-color:none");
// }
