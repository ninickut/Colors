function changeColor(idInput, classText, classBg) {
  var novaCor = document.getElementById(idInput).value;

  var divText = document.querySelectorAll("." + classText);
  divText.forEach(function (divText) {
    divText.style.color = novaCor;
    divText.innerHTML = novaCor;
  });
  var divBg = document.querySelectorAll("." + classBg);
  divBg.forEach(function (divBg) {
    divBg.style.backgroundColor = novaCor;
  });
}

let color1 = "#53221B";
let color2 = "#C29D89";
let color3 = "#444239";
let color4 = "#6C5E49";
let color5 = "#5B5151";

var shadows1 = document.getElementsByClassName("shadow1");
var shadows2 = document.getElementsByClassName("shadow2");
var shadows3 = document.getElementsByClassName("shadow3");
var shadows4 = document.getElementsByClassName("shadow4");
var shadows5 = document.getElementsByClassName("shadow5");

var shadows1Bg = document.getElementsByClassName("shadow1Bg");
var shadows2Bg = document.getElementsByClassName("shadow2Bg");
var shadows3Bg = document.getElementsByClassName("shadow3Bg");
var shadows4Bg = document.getElementsByClassName("shadow4Bg");
var shadows5Bg = document.getElementsByClassName("shadow5Bg");

function copyCss() {
  const css =
    ":root{\n--color-1: " +
    color1 +
    ";\n--color-2: " +
    color2 +
    ";\n--color-3: " +
    color3 +
    ";\n--color-4: " +
    color4 +
    ";\n--color-5: " +
    color5 +
    ";\n--shadow-1-1: " +
    shadows1[0].innerHTML +
    ";\n--shadow-1-2: " +
    shadows1[1].innerHTML +
    ";\n--shadow-1-3: " +
    shadows1[2].innerHTML +
    ";\n--shadow-1-4: " +
    shadows1[3].innerHTML +
    ";\n--shadow-2-1: " +
    shadows2[0].innerHTML +
    ";\n--shadow-2-2: " +
    shadows2[1].innerHTML +
    ";\n--shadow-2-3: " +
    shadows2[2].innerHTML +
    ";\n--shadow-2-4: " +
    shadows2[3].innerHTML +
    ";\n--shadow-3-1: " +
    shadows3[0].innerHTML +
    ";\n--shadow-3-2: " +
    shadows3[1].innerHTML +
    ";\n--shadow-3-3: " +
    shadows3[2].innerHTML +
    ";\n--shadow-3-4: " +
    shadows3[3].innerHTML +
    ";\n--shadow-4-1: " +
    shadows4[0].innerHTML +
    ";\n--shadow-4-2: " +
    shadows4[1].innerHTML +
    ";\n--shadow-4-3: " +
    shadows4[2].innerHTML +
    ";\n--shadow-4-4: " +
    shadows4[3].innerHTML +
    ";\n--shadow-5-1: " +
    shadows5[0].innerHTML +
    ";\n--shadow-5-2: " +
    shadows5[1].innerHTML +
    ";\n--shadow-5-3: " +
    shadows5[2].innerHTML +
    ";\n--shadow-5-4: " +
    shadows5[3].innerHTML +
    ";\n}";
  navigator.clipboard.writeText(css);
}

function addNewColor1() {
  color1 = document.getElementById("inputC1").value;
  changeColor("inputC1", "color1_text", "color1_bg");
  shadow(color1, shadows1,shadows1Bg);
}

function addNewColor2() {
  color2 = document.getElementById("inputC2").value;
  changeColor("inputC2", "color2_text", "color2_bg");
  shadow(color2, shadows2,shadows2Bg);
}

function addNewColor3() {
  color3 = document.getElementById("inputC3").value;
  changeColor("inputC3", "color3_text", "color3_bg");
  shadow(color3, shadows3,shadows3Bg);
}

function addNewColor4() {
  color4 = document.getElementById("inputC4").value;
  changeColor("inputC4", "color4_text", "color4_bg");
  shadow(color4, shadows4,shadows4Bg);
}

function addNewColor5() {
  color5 = document.getElementById("inputC5").value;
  changeColor("inputC5", "color5_text", "color5_bg");
  shadow(color5, shadows5,shadows5Bg);
}

function findShadow(hex, percentual) {
  hex = hex.replace(/^#/, "");

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  const novoR = Math.max(
    0,
    Math.min(255, Math.round((r * (100 - percentual)) / 100))
  );
  const novoG = Math.max(
    0,
    Math.min(255, Math.round((g * (100 - percentual)) / 100))
  );
  const novoB = Math.max(
    0,
    Math.min(255, Math.round((b * (100 - percentual)) / 100))
  );

  const novaCorHex = `#${novoR.toString(16).padStart(2, "0")}${novoG
    .toString(16)
    .padStart(2, "0")}${novoB.toString(16).padStart(2, "0")}`;

  return novaCorHex;
}

function shadow(original, shadows, shadowsBg) {

  let shadow1 = findShadow(original, -60);
  let shadow2 = findShadow(original, -30);
  let shadow3 = findShadow(original, 30);
  let shadow4 = findShadow(original, 60);

  shadows[0].style.color = shadow1;
  shadows[0].innerHTML = shadow1;
  shadowsBg[0].style.backgroundColor = shadow1;
  shadowsBg[0].innerHTML = shadow1;


  shadows[1].style.color = shadow2;
  shadows[1].innerHTML = shadow2;
  shadowsBg[1].style.backgroundColor = shadow2;
  shadowsBg[1].innerHTML = shadow2;


  shadows[2].style.color = shadow3;
  shadows[2].innerHTML = shadow3;
  shadowsBg[2].style.backgroundColor = shadow3;
  shadowsBg[2].innerHTML = shadow3;


  shadows[3].style.color = shadow4;
  shadows[3].innerHTML = shadow4;
  shadowsBg[3].style.backgroundColor = shadow4;
  shadowsBg[3].innerHTML = shadow4;

  
}

//Carrousel
const carousel = document.querySelector(".carousel");
const pages = document.querySelectorAll(".page");
let currentPage = 0;

function slideToPage(pageNumber) {
  if (pageNumber < 0 || pageNumber >= pages.length) return;

  const translateX = -pageNumber * 100; // 100% offset per page
  carousel.style.transform = `translateX(${translateX}%)`;
  currentPage = pageNumber;
}

function nextSlide() {
  slideToPage(currentPage + 1);
}

function prevSlide() {
  slideToPage(currentPage - 1);
}

// Event listeners to navigate between pages
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    prevSlide();
  } else if (event.key === "ArrowRight") {
    nextSlide();
  }
});
