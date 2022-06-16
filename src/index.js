//const inputSection = document.getElementById("input-page");
//const outputSection = document.getElementById("output-page");
const generatorButton = document.getElementById("generator");
const moodInput = document.getElementById("mood");
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
const palette_empty = {
  one: "",
  two: "",
  three: "",
  four: ""
};
const palette_hungry = {
  one: "#4700D8",
  two: "#9900F0",
  three: "#F900BF",
  four: "#FF85B3"
};

const palette_excited = {
  one: "#1F4690",
  two: "#3A5BA0",
  three: "#FFA500",
  four: "#FFE5B4"
};

const palette_sad = {
  one: "#003769",
  two: "#004b90",
  three: "#175981",
  four: "#016c8b"
};

const palette_happy = {
  one: "#F00",
  two: "#00F",
  three: "#0FF",
  four: "#0FF"
};

const palette_awkward = {
  one: "#F0F",
  two: "#F0F",
  three: "#F0F",
  four: "#F0F"
};

const changeColorPalette = (color_palette) => {
  const header = document.getElementById("choosenMood");
  const palette = document.getElementById("palette");
  const childrens = palette.childNodes;
  // console.log(childrens)
  // console.log(palette.children)
  const firstElement = childrens[3];
  const secondElement = childrens[5];
  const thirdElement = childrens[7];
  const fourthElement = childrens[9];
  header.innerHTML = moodInput.value;
  firstElement.innerHTML = color_palette.one;
  firstElement.style.backgroundColor = color_palette.one;
  firstElement.style.border = color_palette.one;
  secondElement.innerHTML = color_palette.two;
  secondElement.style.backgroundColor = color_palette.two;
  secondElement.style.border = color_palette.one;
  thirdElement.innerHTML = color_palette.three;
  thirdElement.style.backgroundColor = color_palette.three;
  thirdElement.style.border = color_palette.one;
  fourthElement.innerHTML = color_palette.four;
  fourthElement.style.backgroundColor = color_palette.four;
  fourthElement.style.border = color_palette.one;
};
console.dir(moodInput.value);
moodInput.addEventListener("change", (event) => {
  console.log(moodInput.value);
});

generatorButton.addEventListener("click", (event) => {
  console.log(moodInput.value);
  switch (moodInput.value) {
    case "hungry":
      changeColorPalette(palette_hungry);
      break;
    case "excited":
      changeColorPalette(palette_excited);
      break;
    case "sad":
      changeColorPalette(palette_sad);
      break;
    case "happy":
      changeColorPalette(palette_happy);
      break;
    case "awkward":
      changeColorPalette(palette_awkward);
      break;
    default:
  }
});
