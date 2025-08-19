// Generic Slider function
function slider(containerSelector, slideSelector, dotSelector, prevSelector, nextSelector) {
  const container = document.querySelector(containerSelector);
  const slides = container.querySelectorAll(slideSelector);
  const prev = container.querySelector(prevSelector);
  const next = container.querySelector(nextSelector);
  const dotsContainer = container.querySelector(dotSelector);
  let index = 0;
  let interval;

  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    container.querySelector(slideSelector + ".active")?.classList.remove("active");
    container.querySelector(dotSelector + " .active")?.classList.remove("active");
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    container.querySelector(".slides, .gallery-slides").style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() { showSlide(index + 1); }
  function prevSlide() { showSlide(index - 1); }

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);

  function start() { interval = setInterval(nextSlide, 5000); }
  function stop() { clearInterval(interval); }

  container.addEventListener("mouseenter", stop);
  container.addEventListener("mouseleave", start);

  showSlide(0);
  start();
}

// Init Sliders
document.addEventListener("DOMContentLoaded", () => {
  slider(".hero-slider", ".slide", ".dots", ".slider-controls .prev", ".slider-controls .next");
  slider(".gallery-slider", ".gallery-slide", ".gallery-dots", ".gallery-controls .prev", ".gallery-controls .next");
});
