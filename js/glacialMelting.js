let currentSlide = 0;
const slides = document.querySelectorAll(".video-item");
const totalSlides = slides.length;

document.querySelector(".right-btn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
});

document.querySelector(".left-btn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

function updateCarousel() {
  const carousel = document.querySelector(".video-carousel");
  constslideWidth = slides[0].clientWidth;
  carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
