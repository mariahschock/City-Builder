// import functions and grab DOM elements
const locationSelect = document.getElementById('location-select');
const architectureSelect = document.getElementById('architecture-select');

const locationDiv = document.getElementById('location');
const architectureDiv = document.getElementById('architecture');
// let state

// set event listeners 
locationSelect.addEventListener('change', () => {
    locationDiv.style.backgroundImage = `url('./assets/${locationSelect.value}.png')`;
});

architectureSelect.addEventListener('change', () => {
    architectureDiv.style.backgroundImage = `url('./assets/${architectureSelect.value}.png')`;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
