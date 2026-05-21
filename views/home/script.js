const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".hero-dot");
let current = 0;
let total = dots.length;
let timer;

function goTo(i) {
  current = (i + total) % total;
  slides.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d) => d.classList.remove("active"));
  dots[current].classList.add("active");
}

function startAuto() {
  timer = setInterval(() => goTo(current + 1), 6000);
}

function resetAuto() {
  clearInterval(timer);
  startAuto();
}

document.getElementById("prev").addEventListener("click", () => {
  goTo(current - 1);
  resetAuto();
});
document.getElementById("next").addEventListener("click", () => {
  goTo(current + 1);
  resetAuto();
});
dots.forEach((d) =>
  d.addEventListener("click", () => {
    goTo(+d.dataset.i);
    resetAuto();
  }),
);

startAuto();
