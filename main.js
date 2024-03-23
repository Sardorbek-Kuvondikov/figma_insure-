const elMenuBtn = document.querySelector(".js-menu-btn");
const elOpenMenu = document.querySelector(".site-header");

elMenuBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  elOpenMenu.classList.toggle("open-menu");
  document.body.classList.toggle("unscrol");
});
