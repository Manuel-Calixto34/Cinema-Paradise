const track = document.querySelector(".carousel__track");
const prevBtn = document.querySelector(".carousel__btn--prev");
const nextBtn = document.querySelector(".carousel__btn--next");
const cards = document.querySelectorAll(".card");

let currentIndex = 0;
const cardsPerPage = 5;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - cardsPerPage) {
    currentIndex += cardsPerPage;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= cardsPerPage;
    updateCarousel();
  }
});

window.addEventListener("resize", updateCarousel);
