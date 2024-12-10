const carousel = document.querySelector(".carousel");
let scrollInterval;

function startCarousel() {
  scrollInterval = setInterval(() => {
    const firstChild = carousel.firstElementChild;
    carousel.scrollBy({ left: 320, behavior: "smooth" });

    setTimeout(() => {
      carousel.appendChild(firstChild);
      carousel.scrollLeft = 0;
    }, 1000);
  }, 3000);
}

carousel.addEventListener("mouseover", () => clearInterval(scrollInterval));
carousel.addEventListener("mouseout", startCarousel);

startCarousel();
