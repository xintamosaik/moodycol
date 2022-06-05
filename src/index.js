const inputSection = document.getElementById("input-page");
const outputSection = document.getElementById("output-page");
const generatorButton = document.getElementById("generator");
const welcomeSection = document.getElementById("welcome-page");
const backButton = document.getElementById("back");
const arrowButton = document.getElementById("arrow");
const menuButton = document.getElementById("menu");

generatorButton.addEventListener("click", (event) => {
  outputSection.classList.toggle("hidden");
  inputSection.classList.toggle("hidden");
});

backButton.addEventListener("click", (event) => {
  welcomeSection.classList.toggle("hidden");
  inputSection.classList.toggle("hidden");
});

arrowButton.addEventListener("click", (event) => {
  welcomeSection.classList.toggle("hidden");
  inputSection.classList.toggle("hidden");
});

menuButton.addEventListener("click", (event) => {
  outputSection.classList.toggle("hidden");
  inputSection.classList.toggle("hidden");
});
