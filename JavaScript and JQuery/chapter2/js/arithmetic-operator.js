// Create variables and assign values to them
var subtotal = (13 + 1) * 5;
var shipping = 0.5 * (13 + 1);
var total = subtotal + shipping;

// Write the results on screen
var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;