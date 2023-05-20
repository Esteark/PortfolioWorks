const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
nav.className = "";
const header = document.querySelector("#header");
const burgermenu = document.querySelector(".menu-toggle");
const clicmenu = document.querySelector(".clickop");
menuToggle.addEventListener("click", () => {
  if (nav.className != "active") {
    nav.className = "active";
    header.style.backgroundColor = "#101920";
    header.style.transition = "0.5s";
    burgermenu.style.color = "#f2f0eb";
  } else {
    nav.className = "";
    header.style.backgroundColor = "rgba(0,0,0,0)";
    header.style.transition = "0.5s";
    burgermenu.style.color = "#101920";
  }
});
clicmenu.addEventListener("click", () => {
  nav.className = "";
  header.style.backgroundColor = "rgba(0,0,0,0)";
  header.style.transition = "0.5s";
  burgermenu.style.color = "#101920";
});
