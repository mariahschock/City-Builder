// import functions and grab DOM elements
const locationSelect = document.getElementById('location-section');
const architectureSelect = document.getElementById('architecture-section');

const locationEl = document.getElementById('location');
const architectureEl = document.getElementById('architecture');
// let state

// set event listeners 
locationSelect.addEventListener('change', () => {
    locationEl.style.backgroundImage = `url('../assets/${locationSelect.value}.png')`;
});

architectureSelect.addEventListener('change', () => {
    architectureEl.style.backgroundImage = `url('../assets/${architectureSelect.value}.png')`;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
