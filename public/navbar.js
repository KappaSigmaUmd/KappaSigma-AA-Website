document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navOverlay = document.querySelector(".nav-overlay");
  burger.addEventListener("click", () => {
    navOverlay.classList.toggle("active");
    burger.classList.toggle("toggle");
  });
  // Optional: close menu when a link is clicked
  navOverlay.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navOverlay.classList.remove("active");
      burger.classList.remove("toggle");
    });
  });
});