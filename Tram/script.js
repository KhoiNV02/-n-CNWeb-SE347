// handle search
const inputSearch = document.getElementById("input-search");
const headerSearch = document.getElementById("header_control-search");
inputSearch.addEventListener("focus", () => {
  headerSearch.classList.add("active");
});
inputSearch.addEventListener("blur", () => {
  headerSearch.classList.remove("active");
});

// handle scroll header
const header = document.getElementById("header");
window.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else header.classList.remove("active");
};

// handle scroll flash sale
const saleScrollTop = document.getElementById("home_sale").offsetTop;
const downArrowHome = document.getElementById("home_main-down");
downArrowHome.addEventListener("click", () => {
  window.scrollTo({ top: saleScrollTop, behavior: "smooth" });
});

//slider for flash sale
var swiper = new Swiper(".home_sale-container", {
  grabCursor: true,
  // loop: true,
  // centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
