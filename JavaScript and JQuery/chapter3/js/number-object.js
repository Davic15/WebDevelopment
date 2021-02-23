// Create a variable to hold a number
var originalNumber = 10.23456;
// Create a variable to hold a message
var msg = "<h2>original number</h2><p>" + originalNumber + "</p>";
// Round the number to 3 decial places and it to the msg variable
msg += "<h2>3 decimal places</h2><p>" + originalNumber.toFixed(3) + "</p>";
// Round the number to a precisely 3 digits and add it to the msg variable
msg += "<h2>3 digits</h2><p>" + originalNumber.toPrecision(3) + "</p>";
// Update HTML
var el = document.getElementById('info');
el.innerHTML = msg;