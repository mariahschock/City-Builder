// import functions and grab DOM elements
const locationSelect = document.getElementById('location-select');
const architectureSelect = document.getElementById('architecture-select');
const knownSelect = document.getElementById('known-select');
const locationDiv = document.getElementById('location');
const architectureDiv = document.getElementById('architecture');
const knownDiv = document.getElementById('known');
const sloganButton = document.getElementById('slogan-button');
const sloganInput = document.getElementById('slogan-input');
const reportEl = document.getElementById('report');
const slogansEl = document.getElementById('slogans');
// let state
let locationCount = 0;
let architectureCount = 0;
let knownCount = 0;

let slogan = [];

// set event listeners 
locationSelect.addEventListener('change', () => {
    locationCount++;
    locationDiv.style.backgroundImage = `url('./assets/${locationSelect.value}.png')`;
    displayStats();
});

architectureSelect.addEventListener('change', () => {
    architectureCount++;
    architectureDiv.style.backgroundImage = `url('./assets/${architectureSelect.value}.png')`;
    displayStats();
});

knownSelect.addEventListener('change', () => {
    knownCount++;
    knownDiv.style.backgroundImage = `url('./assets/${knownSelect.value}.png')`;
    displayStats();
});

sloganButton.addEventListener('click', () => {
    slogan.push(sloganInput.value);
    sloganInput.value = ' ';
    displaySlogans();
});

function displayStats() {
    reportEl.textContent = `You have changed the location ${locationCount} times, the architecture ${architectureCount} times, and the known for ${knownCount} times.`;
}

function displaySlogans() {
    slogansEl.textContent = '';
    const slogans = document.getElementById('slogans');

    for (let tagline of slogan) {
        const li = document.createElement('li');
        li.textContent = tagline;
        slogans.append(li);
    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
