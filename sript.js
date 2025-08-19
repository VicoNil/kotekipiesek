// Responsive menu
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Hero slider
let slides = document.querySelectorAll(".hero-slider .slide");
let dotsContainer = document.querySelector(".dots");
let currentIndex = 0;
let interval = setInterval(nextSlide, 5000);

// Create dots
slides.forEach((_, i) => {
  let dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
let dots = document.querySelectorAll(".dots span");

function nextSlide() {
  slides[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}

function prevSlide() {
  slides[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}

function goToSlide(index) {
  slides[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");
  currentIndex = index;
  slides[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}

// Nav buttons
document.querySelector(".slider-nav .next").addEventListener("click", nextSlide);
document.querySelector(".slider-nav .prev").addEventListener("click", prevSlide);

// Pause on hover
document.querySelector(".hero-slider").addEventListener("mouseenter", () => clearInterval(interval));
document.querySelector(".hero-slider").addEventListener("mouseleave", () => interval = setInterval(nextSlide, 5000));

// Gallery slider
const galleryTrack = document.querySelector(".gallery-track");
const galleryPrev = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");
let galleryIndex = 0;

function updateGallery() {
  galleryTrack.style.transform = `translateX(-${galleryIndex * 100}%)`;
}

galleryNext.addEventListener("click", () => {
  galleryIndex = (galleryIndex + 1) % galleryTrack.children.length;
  updateGallery();
});

galleryPrev.addEventListener("click", () => {
  galleryIndex = (galleryIndex - 1 + galleryTrack.children.length) % galleryTrack.children.length;
  updateGallery();
});
