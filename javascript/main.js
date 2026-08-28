document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".menu");

    toggle.addEventListener("click", () => {
      const isOpen = dropdown.classList.toggle("active");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  const scene = document.querySelector(".bottom-scene");
  const floralLayer = document.querySelector(".floral-layer");

  if (scene && floralLayer && !prefersReducedMotion) {
    let ticking = false;

    const updateParallax = () => {
      ticking = false;
      const rect = scene.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const offset = (progress - 0.5) * 60;

      floralLayer.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    }, { passive: true });

    updateParallax();
  }
});
