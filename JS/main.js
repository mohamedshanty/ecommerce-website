/* START SHOW MENU */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/* END SHOW MENU */

/* START Menu Show END*/

/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/* Hide Show */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/* END Menu Show END*/

/* START IMAGE GALLERY */
function imgGallery() {
  const mainImg = document.querySelector(".details-img"),
    smallimg = document.querySelectorAll(".details-small-img");

  smallimg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}
imgGallery();
/* End IMAGE GALLERY */

/* START SWIPER CATEGORIES */
var swiperCategories = new Swiper(".categories-container", {
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});
/* END SWIPER CATEGORIES */

/* START SWIPER PRODUCTS */
var swiperProducts = new Swiper(".new-container", {
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
/* End SWIPER PRODUCTS */

/* START PRODUCTS TABS */
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });
    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});
/* END PRODUCTS TABS */
