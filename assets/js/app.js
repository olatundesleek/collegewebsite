let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu-list");
let socialLinks = document.querySelector(".social-links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("show");
  socialLinks.classList.toggle("margin");
});
