// Create a variable to hold a random number between 1 and 10
var randomNum = Math.floor((Math.random() * 10) + 1);
// The random number will be between 1-9, so I added one to get till 10.

// Update HTML
var el = document.getElementById("info");
el.innerHTML = "<h2>random number</h2><p>" + randomNum + "</p>";