fetch("../../shared/components/topbar.html")
  .then((r) => r.text())
  .then((html) => {
    const wrapper = document.getElementById("topbar");
    wrapper.innerHTML = html;
    wrapper.style.display = "contents";

    // Slider — va aquí porque el HTML ya existe en el DOM
    const slides = document.querySelectorAll(".topbar-slide");
    if (!slides.length) return;
    let current = 0;

    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 3500);
  });
