fetch("../../shared/components/footer.html")
  .then((r) => r.text())
  .then((html) => {
    const wrapper = document.getElementById("footer");
    wrapper.innerHTML = html;
    wrapper.style.display = "contents";
  });
