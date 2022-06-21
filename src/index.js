const moodInput = document.getElementById("mood");

const palette_hungry = {
  first: "#4700D8",
  second: "#9900F0",
  third: "#F900BF",
  fourth: "#FF85B3"
};

const palette_excited = {
  first: "#3EC1D3",
  second: "#F6F7D7",
  third: "#FF9A00",
  fourth: "#FF165D"
};

const palette_sad = {
  first: "#003769",
  second: "#004b90",
  third: "#175981",
  fourth: "#016c8b"
};

const palette_happy = {
  first: "#FFCFDF",
  second: "#FEFDCA",
  third: "#E0F9B5",
  fourth: "#A5DEE5"
};

const palette_awkward = {
  first: "#CB026E",
  second: "#F62800",
  third: "#FFDB00",
  fourth: "#7BCD00"
};

const palette_calm = {
  first: "#E3FDFD",
  second: "#CBF1F5",
  third: "#A6E3E9",
  fourth: "#71C9CE"
};

const palette_confident = {
  first: "#222831",
  second: "#393E46",
  third: "#00ADB5",
  fourth: "#EEEEEE"
};
const recolor = (elementID, color) => {
  try {
    const element = document.getElementById(elementID);
    try {
      element.classList.remove("stop");
      element.innerHTML = color;
      element.style.backgroundColor = color;
      element.style.border = color;
      element.classList.add("start");

      setTimeout(function () {
        element.classList.remove("start");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {}
};
const changeColorPalette = (color_palette) => {
  const colorFields = ["first", "second", "third", "fourth"];
  colorFields.forEach((element) => {
    setTimeout(function () {
      recolor(element, color_palette[element]);
    }, 200);
  });
};

try {
  moodInput.addEventListener("change", (event) => {
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
      case "calm":
        changeColorPalette(palette_calm);
        break;
      case "confident":
        changeColorPalette(palette_confident);
        break;

      default:
    }
  });
} catch (error) {
  console.log(error);
}
