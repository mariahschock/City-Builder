// import functions and grab DOM elements
const locationSelect = document.getElementById('location-select');
const architectureSelect = document.getElementById('architecture-select');
const locationDiv = document.getElementById('location');
const architectureDiv = document.getElementById('architecture');
const sloganButton = document.getElementById('slogan-button');
const sloganInput = document.getElementById('slogan-input');
const reportEl = document.getElementById('report');
// let state
let locationCount = 0;
let architectureCount = 0;

let slogan = [];

// set event listeners 
locationSelect.addEventListener('change', () => {
    locationCount++;
    locationDiv.style.backgroundImage = `url('./assets/${locationSelect.value}.png')`;
});

architectureSelect.addEventListener('change', () => {
    architectureCount++;
    architectureDiv.style.backgroundImage = `url('./assets/${architectureSelect.value}.png')`;
});

sloganButton.addEventListener('click', () => {
    slogan.push(sloganInput.value);
    sloganInput.value = ' ';
    displaySlogans();
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
