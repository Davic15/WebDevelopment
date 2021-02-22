// Create variables and assign them values
var inStock;
var shipping;

inStock = true;
shipping = false;

/*  
    Some other processing might go here and, as a result
    the script might need to change these values.
*/

inStock = false;
shipping = true;

// Get the element and set class name with the variable
var elStock = document.getElementById('stock');
elStock.className = inStock;

// Get the element and set class name with the variable
var elShip = document.getElementById('shipping');
elShip.className = shipping;