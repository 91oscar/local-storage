// Local Storage provides a simple API to set and get values, it's a "Key-Value" store, a bit like a JavaScript object, but it persists between page reloads, and browser restarts.

// Local Storage has limited size of around 5MB,

const reallyCoolObject = {
  name: `woo`,
  favAnimal: `Darcy`,
  favFood: `sushi`,
  favPlace: `Tech Educators (Hawaii campus)`,
  faVlist: [1, 2, 3, 4],
};

// PUT THING IN LOCAL STORAGE
// STEP 1
const stringfied = JSON.stringify(reallyCoolObject);

// Local storage only wants strings.
// setItem takes key(myInfo) and value (stringfied)

localStorage.setItem(`myInfo`, stringfied);

// GET SOMETHING FROM LOCAL STORAGE
const myLOcalObj = localStorage.getItem(`myInfo`);
console.log(myLOcalObj);

// PUT BACK INTO AN OBJECT

const parseObject = JSON.parse(myLOcalObj);
console.log(parseObject.favAnimal);

///////////////////////////////////////////////////////////////////////////////////////////////////////7
// WORK!! Version 1.0 !

const colourForm = document.getElementById("colourForm");

function changeBG(colorParam) {
  document.body.style.backgroundColor = colorParam;
}

function handleSubmite(event) {
  event.preventDefault();

  const myColour = event.target.colour.value;
  changeBG(myColour);
  localStorage.setItem("localColour", myColour);
}
colourForm.addEventListener("submit", handleSubmite);

function loudColor() {
  const localColor = localStorage.getItem("localColour");
  changeBG(localColor);
}

loudColor();

///////////////////////////////////////////////////////////////////////////////////////77
// WORK!! Version 2.0 !

document.getElementById("colourForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const myColour = event.target.colour.value;
  changecColor(myColour);
  localStorage.setItem("localColour", myColour);
});

const localColor = localStorage.getItem("localColour");

function changecColor(color) {
  document.body.style.backgroundColor = color;
}

changecColor(localColor);

/////////////////////////////////////////////////////777//////////////////////////////////
//NOt WORK 100%...!! Version 3.0 !

document.querySelector(`form`).addEventListener(`submit`, (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  let stringfied = JSON.stringify(data);
  localStorage.setItem("colour", stringfied);

  const colour = localStorage.getItem("colour");
  final = JSON.parse(colour);
  changeColour(final.colour);
});

function changeColour(colour) {
  document.body.style.backgroundColor = colour;
}
