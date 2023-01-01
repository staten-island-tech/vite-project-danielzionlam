import "../styles/style.css";
import { animals } from "./menu";

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

// Darren's flexbox thing

function insertCard(animal) {
  document.querySelector(".app").insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
    <img class="card-pic" src="${animal.img}">
    <div class="card-text">
      <h3 class="card-title">${animal.name}</h3>
      <h4 class="card-title"> $${animal.price}</h4>
      <h4 class="card-title"><i class="fab fa-ethereum"></i></h4>
      <h4 class="caption">${animal.armedanddangerous}</h4>
    </div>
  </div>`
  );
}

// rocks.forEach(rock => console.log(rock.name));
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

function displaySaleRocks() {
  /* const saleRocks= rocks.map( function(rock){
    return rock.cost/2;
 })
 console.log(saleRocks);
 let x= 0; */
  animals
    .map((animal) => ({
      name: animal.name,
      sus: animal.sus,
      armedanddangerous: animal.armedanddangerous,
      img: animal.img,
      price: (animal.price / 1.5).toFixed(1.5),
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
  displaySaleRocks();
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
