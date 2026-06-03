document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown").forEach(dropdown => {
    dropdown.addEventListener("click", () => {
      dropdown.closest(".card").classList.toggle("active");
    });
  });
});