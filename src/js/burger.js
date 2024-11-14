const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const html = document.querySelector("html");
const mainOverlay = document.querySelector(".main-overlay");

const closeNavMenu = () => {
  burger.classList.remove("is-active");
  nav.classList.remove("is-active");
  mainOverlay.classList.remove("is-active");
  html.classList.remove("lock");
};

burger.addEventListener("click", () => {
  nav.classList.toggle("is-active");
  burger.classList.toggle("is-active");
  mainOverlay.classList.toggle("is-active");
  html.classList.toggle("lock");
});

document.addEventListener("click", (e) => {
  if (e.target === mainOverlay) {
    closeNavMenu();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeNavMenu();
  }
});
