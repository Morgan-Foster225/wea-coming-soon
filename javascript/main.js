
document.querySelectorAll(".dropdown").forEach(dropdown => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();

    const card = dropdown.closest(".card");
    card.classList.toggle("active");
  });
});