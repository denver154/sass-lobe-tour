const faqs = document.querySelectorAll(".faq__question h4");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.nextElementSibling.classList.toggle("open");
    faq.querySelector("i").classList.toggle("open");
  });
});

const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__actions");
  toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
});

const footer = document.querySelectorAll(".footer__links__item h4");
links.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});

