const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

const colorSelector = document.querySelector('select[name="Color"]');
const slides = document.querySelectorAll(".swiper-slide");

function filterSlidesByColor(color) {
  slides.forEach((slide) => {
    const slideColor = slide.dataset.color;
    slide.style.display = slideColor === color ? "block" : "none";
  });
  swiper.update();
}

if (colorSelector) {
  colorSelector.addEventListener("change", function () {
    const selectedColor = this.value.toLowerCase();
    filterSlidesByColor(selectedColor);
  });

  const initialColor = colorSelector.value.toLowerCase();
  filterSlidesByColor(initialColor);
}
