//const inputSection = document.getElementById("input-page");
//const outputSection = document.getElementById("output-page");
const generatorButton = document.getElementById("generator");
//const welcomeSection = document.getElementById("welcome-page");
//const backButton = document.getElementById("back");
//const arrowButton = document.getElementById("arrow");
//const menuButton = document.getElementById("menu");
/*
generatorButton.addEventListener("click", (event) => {
  outputSection.classList.toggle("hidden");
  inputSection.classList.toggle("hidden");
})

backButton.addEventListener("click", (event) => {
  welcomeSection.classList.toggle("hidden");
  inputSection.classList.toggle("hidden");
})

arrowButton.addEventListener("click", (event) => {
  welcomeSection.classList.toggle("hidden");
  inputSection.classList.toggle("hidden");
})

menuButton.addEventListener("click", (event) => {
  outputSection.classList.toggle("hidden");
  inputSection.classList.toggle("hidden");
})
*/

const paletteone = {
  one: "#4700D8",
  two: "#9900F0",
  three: "#F900BF",
  four: "#FF85B3"
};

const palette = document.getElementById("palette");
const childrens = palette.childNodes;

const changeColorPalette = (palette) => {
  childrens[3].innerHTML = paletteone.one;
  childrens[3].style.backgroundColor = paletteone.one;
  childrens[5].innerHTML = paletteone.two;
  childrens[5].style.backgroundColor = paletteone.two;
  childrens[7].innerHTML = paletteone.three;
  childrens[7].style.backgroundColor = paletteone.three;
  childrens[9].innerHTML = paletteone.four;
  childrens[9].style.backgroundColor = paletteone.four;
};
changeColorPalette(childrens);
const resetColorPalette = () => {
  childrens[3].innerHTML = "";
  childrens[5].innerHTML = "";
  childrens[7].innerHTML = "";
  childrens[9].innerHTML = "";
  childrens[3].style.border = "";
  childrens[5].style.border = "";
  childrens[7].style.border = "";
  childrens[9].style.border = "";
  childrens[3].style.backgroundColor = "";
  childrens[5].style.backgroundColor = "";
  childrens[7].style.backgroundColor = "";
  childrens[9].style.backgroundColor = "";
};

generatorButton.addEventListener("click", (event) => {
  resetColorPalette();
});
