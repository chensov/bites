const slidesContainer = document.querySelector("#slides");
const slides = document.querySelectorAll(".hero-card");
let currentIndex = 0;

function move(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  slidesContainer.style.transform = `translateX(${-100 * currentIndex}%)`;
}

move(0); // Initialize the slider position
