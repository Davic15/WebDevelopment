// Create the array and assign it values
var colors = ['white', 'black', 'custom'];

// Update the third item in the array
colors[2] = 'beige';

var el = document.getElementById('colors');
el.textContent = colors[2];