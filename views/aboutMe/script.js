// sobre-mi.js
// Resalta el link activo en el navbar si está integrado
document.querySelectorAll(".nav-links a, .nav-drawer a").forEach((link) => {
  if (link.getAttribute("href") === "/sobre-mi") {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
