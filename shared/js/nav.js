// Cargar Calendly
function loadCalendly() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  document.body.appendChild(script);
}

loadCalendly();

// navbar common to all views
fetch("../../shared/components/nav.html")
  .then((r) => r.text())
  .then((html) => {
    const wrapper = document.getElementById("navbar");
    wrapper.innerHTML = html;
    wrapper.style.display = "contents";

    const toggle = document.getElementById("toggle");
    const drawer = document.getElementById("drawer");
    const navbar = document.getElementById("navbar");

    toggle.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
    });

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      navbar.classList.toggle("scrolled", scrollY > 10);
    });
  });
