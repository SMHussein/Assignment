//Selectors
const hashedLinks = document.querySelectorAll('a[href^="#"]');
const rightNavItems = document.querySelectorAll(".nav-right__item");
const rightNavList = document.querySelector(".nav-right__list");

// To fix the shake effect onClicking a link
hashedLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    history.pushState({}, "", link.href);
    history.pushState({}, "", link.href);
    history.back();
  });
});

// To add a border bottom for the active item
rightNavList.addEventListener("click", function (e) {
  if (!e.target.classList.contains("nav-right__link")) return;

  rightNavItems.forEach((item) => {
    item.classList.remove("nav-right__item--active");
  });
  e.target.parentElement.classList.add("nav-right__item--active");
});
