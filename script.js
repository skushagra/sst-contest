let currentIndex = 0;

function showSlide(index) {
  const container = document.querySelector(".carousel-inner");
  const slideWidth = document.querySelector(".testimonial").offsetWidth;
  container.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showSlide(currentIndex);
}
