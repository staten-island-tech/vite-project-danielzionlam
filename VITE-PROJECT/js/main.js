import "../styles/style.css";
import "../styles/variables.css";
import { rocks } from "../js/menu.js";

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

function insertCard(rock) {
  document.querySelector(".app").insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
    <img class="card-pic" src="${rock.pic}">
    <div class="card-text">
      <h3 class="card-title">${rock.name}</h3>
      <h4 class="card-title"> $${rock.cost}</h4>
      <h4 class="card-title"><i class="fab fa-ethereum"></i></h4>
      <h4 class="caption">${rock.description}</h4>
    </div>
  </div>`
  );
}

// rocks.forEach(rock => console.log(rock.name));
function displayAllCards() {
  rocks.forEach((rock) => {
    insertCard(rock);
  });
}
displayAllCards();

function displayColdRocks() {
  rocks
    .filter((rock) => rock.section === "cool-rocks")
    .forEach((rock) => {
      insertCard(rock);
    });
}
function displayDumbRocks() {
  rocks
    .filter((rock) => rock.section === "stoopid-rocks")
    .forEach((rock) => {
      insertCard(rock);
    });
}
function displayPoopRocks() {
  rocks
    .filter((rock) => rock.section === "heals-diarrhea")
    .forEach((rock) => {
      insertCard(rock);
    });
}

function displaySaleRocks() {
  /* const saleRocks= rocks.map( function(rock){
    return rock.cost/2;
 })
 console.log(saleRocks);
 let x= 0; */
  rocks
    .map((rock) => ({
      name: rock.name,
      section: rock.section,
      description: rock.description,
      pic: rock.pic,
      cost: (rock.cost / 2).toFixed(2),
    }))
    .filter((rock) => rock.section === "stoopid-rocks")
    .forEach((rock) => {
      insertCard(rock);
      console.log(rock);
    });
}

function clickyCold() {
  clearDOM();
  displayColdRocks();
}

function clickyDumb() {
  clearDOM();
  displayDumbRocks();
}

function clickyPoop() {
  clearDOM();
  displayPoopRocks();
}

function clickyAll() {
  clearDOM();
  displayAllCards();
}

function clickySale() {
  clearDOM();
  displaySaleRocks();
}

const coolRocksButton = document.getElementById("cold-rocks-btn");
coolRocksButton.addEventListener("click", clickyCold);
const stoopidRocksButton = document.getElementById("dumb-rocks-btn");
stoopidRocksButton.addEventListener("click", clickyDumb);
const poopyRocksButton = document.getElementById("poop-rocks-btn");
poopyRocksButton.addEventListener("click", clickyPoop);
const allRocksButt = document.getElementById("all-rocks-btn");
allRocksButt.addEventListener("click", clickyAll);
const saleButton = document.getElementById("sale-rocks-btn");
saleButton.addEventListener("click", clickySale);

var sound = new Audio("fart.mp3");

poopyRocksButton.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();
});

// .coolrocks.form.addEventListener("click", function(){
// rocks.forEach((rock) => console.log(rock.section)); */
// const DOMSelectors={
//   coolrocks: document.getElementById("coldrocks"),
//   stoopidrocks:document.getElementById("dumrocks"),
//   healsdiarrhea:document.getElementById("poop"),

// }
// console.log(DOMSelectors);
// DOMSelectors.coolrocks.addEventListener("click",()=>{

//     .remove(rocks.section==="heals-diarrhea");
//   console.log("clicked");

// const cool = rocks.filter((rock) => rock.section == "cool-rocks");
// console.log(cool);

// const coolRocks = document.getElementById("coldrocks");
// console.log(coolRocks);
// coolRocks.forEach((coolrock)=>{
//   coolrock.addEventListener("click", ()=>{
//     console.log("clicked");
//   })
// });
