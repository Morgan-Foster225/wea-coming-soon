document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".menu");

    toggle.addEventListener("click", () => {
      const isOpen = dropdown.classList.toggle("active");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });
});
