const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__actions");
  toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
});