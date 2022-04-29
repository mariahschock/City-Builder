// import functions and grab DOM elements
const locationSelect = document.getElementById('location-select');
const architectureSelect = document.getElementById('architecture-select');
const locationDiv = document.getElementById('location');
const architectureDiv = document.getElementById('architecture');
const sloganButton = document.getElementById('slogan-button');
const sloganInput = document.getElementById('slogan-input');
const reportEl = document.getElementById('report');
const sloganEl = document.getElementById('slogan');
// let state
let locationCount = 0;
let architectureCount = 0;

let slogans = [];

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

sloganButton.addEventListener('click', () => {
    slogans.push(sloganInput.value);
    sloganInput.value = ' ';
    displaySlogans();
});

function displayStats() {
    reportEl.textContent = `You have changed the location ${locationCount} times and the architecture ${architectureCount} times.`;
}

function displaySlogans() {
    sloganEl.textContent = '';
    const slogans = document.getElementById('slogans');

    for (let tagline of slogans) {
        const li = document.createElement('li');
        li.textContent = tagline;
        slogans.append(li);
    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
