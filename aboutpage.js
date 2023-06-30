const djContainer = document.querySelector(".grids");
const hamburger = document.querySelector(".navbars");
const mobileMenu = document.querySelector(".mobilemenu");
const mobileMenuItems = document.querySelectorAll(".item");
const bar = document.querySelectorAll(".bar");
const viewMore = document.querySelector(".featureddjs button");

mobileMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
});

hamburger.addEventListener("click", () => {
  mobileMenu.style.display = "block";
  bar.forEach((r) => {
    r.style.backgroundcolor = "red";
  });
});
