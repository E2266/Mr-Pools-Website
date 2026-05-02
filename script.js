const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.style.background = "rgba(5, 20, 35, 0.95)";
  } else {
    header.style.background = "rgba(5, 20, 35, 0.75)";
  }
});
