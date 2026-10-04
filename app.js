const navToggle = document.getElementById("nav-toggle");
const mobileNav = document.getElementById("mobile-nav");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = !mobileNav.classList.contains("hidden");
    mobileNav.classList.toggle("hidden");
    navToggle.setAttribute("aria-expanded", String(!isOpen));
  });
}
