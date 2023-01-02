import "../styles/style.css";
import { animals } from "./menu.js";

const DOMSelectors = {
  appSec: document.querySelector(".app"),
};
function clearDOM() {
  DOMSelectors.appSec.innerHTML = "";
}

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

function insertCard(animal) {
  document.querySelector(".app").insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
    <img class="card-pic" src="${animal.img}">
    <div class="card-text">
      <h3 class="card-title">${animal.name}</h3>
      <h4 class="card-title"> $${animal.price}</h4>
      <h4 class="caption">herpes: ${animal.herpes}</h4>
    </div>
  </div>`
  );
}

function displayAllCards() {
  animals.forEach((animal) => {
    insertCard(animal);
  });
}
displayAllCards();

function displaySusAnimals() {
  animals
    .filter((animal) => animal.sus === "yes")
    .forEach((animal) => {
      insertCard(animal);
    });
}
function displayNotSusAnimals() {
  animals
    .filter((animal) => animal.sus === "no")
    .forEach((animal) => {
      insertCard(animal);
    });
}
function displayArguablySusAnimals() {
  animals
    .filter((animal) => animal.sus === "argueable")
    .forEach((animal) => {
      insertCard(animal);
    });
}
function displayHerpes() {
  animals
    .filter((animal) => animal.herpes === true)
    .forEach((animal) => {
      insertCard(animal);
    });
}
function displaySafe() {
  animals
    .filter((animal) => animal.herpes === false)
    .forEach((animal) => {
      insertCard(animal);
    });
}
function displayLightskin() {
  animals
    .filter((animal) => animal.lightskin === true)
    .forEach((animal) => {
      insertCard(animal);
    });
}
function displaySale() {
  animals
    .map((animal) => ({
      name: animal.name,
      sus: animal.sus,
      herpes: animal.herpes,
      img: animal.img,
      price: (animal.price / 4).toFixed(4),
    }))
    .filter((animal) => animal.sus === "yes")
    .forEach((animal) => {
      insertCard(animal);
      console.log(animal);
    });
}

function clickSus() {
  clearDOM();
  displaySusAnimals();
}

function clickNyetSus() {
  clearDOM();
  displayNotSusAnimals();
}

function clickHmm() {
  clearDOM();
  displayArguablySusAnimals();
}

function clickAnimals() {
  clearDOM();
  displayAllCards();
}

function clickSale() {
  clearDOM();
  displaySale();
}

function clickHerpes() {
  clearDOM();
  displayHerpes();
}

function clickSafe() {
  clearDOM();
  displaySafe();
}
function clickLightskin() {
  clearDOM();
  displayLightskin();
}

const susButton = document.getElementById("sus-btn");
susButton.addEventListener("click", clickSus);
const nyetSusButton = document.getElementById("nyetsus-btn");
nyetSusButton.addEventListener("click", clickNyetSus);
const hmmButton = document.getElementById("hmm-btn");
hmmButton.addEventListener("click", clickHmm);
const allAnimalsButton = document.getElementById("animals-btn");
allAnimalsButton.addEventListener("click", clickAnimals);
const saleButton = document.getElementById("sale-btn");
saleButton.addEventListener("click", clickSale);
const herpesButton = document.getElementById("herpes-btn");
herpesButton.addEventListener("click", clickHerpes);
const safeButton = document.getElementById("safe-btn");
safeButton.addEventListener("click", clickSafe);
const lightskinButton = document.getElementById("lightskin-btn");
lightskinButton.addEventListener("click", clickLightskin);
