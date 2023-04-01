window.addEventListener("scroll", () => {
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 0);
});

const toggleMenu = () => {
  let menu = document.querySelector(".toggle");
  let menu1 = document.querySelector(".menu");

  menu.classList.toggle("active");
  menu1.classList.toggle("active");
};
