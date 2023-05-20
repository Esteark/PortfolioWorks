const btnfeatures = document.getElementById("btnfeatures");
const btncompany = document.getElementById("btncompany");
const nav__itemFeature = document.querySelector(".nav__itemFeatures");
const nav__itemCompany = document.querySelector(".nav__itemCompany");
const nav__iconMenu = document.querySelector(".nav__iconMenu");
const btnCloseMenu = document.getElementById("btnCloseMenu");
const nav__navigation = document.querySelector(".nav__navigation");
const nav__ul = document.querySelector(".nav__ul");
let menu = false;

const showanimation = (objectHTML) => {
  objectHTML.classList.remove("animate__fadeOutRight");
  objectHTML.classList.add("animate__fadeInRight");
};

const hideanimation = (objectHTML) => {
  objectHTML.classList.remove("animate__fadeInRight");
  objectHTML.classList.add("animate__fadeOutRight");
  setTimeout(() => {
    objectHTML.style.display = "none";

    console.log(objectHTML);
  }, 1000);
};

btnCloseMenu.addEventListener("click", () => {
  hideanimation(nav__navigation);

  menu = false;
});

nav__iconMenu.addEventListener("click", () => {
  nav__navigation.style.display = "flex";
  showanimation(nav__navigation);

  menu = true;
});

btnfeatures.addEventListener("click", () => {
  nav__itemFeature.classList.toggle("hidden");
});

window.addEventListener("resize", () => {
  if (screen.width >= 900) {
    btnfeatures.addEventListener("mouseover", () => {
      nav__itemFeature.classList.toggle("hidden");
    });
    btnfeatures.addEventListener("mouseleave", () => {
      nav__itemFeature.classList.toggle("hidden");
    });
    btncompany.addEventListener("mouseover", () => {
      nav__itemCompany.classList.toggle("hidden");
    });
    btncompany.addEventListener("mouseleave", () => {
      nav__itemCompany.classList.toggle("hidden");
    });
  }
});

btncompany.addEventListener("click", () => {
  nav__itemCompany.classList.toggle("hidden");
});
