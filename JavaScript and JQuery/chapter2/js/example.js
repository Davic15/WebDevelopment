// Variables for the welcome message
var greeting = "Howdy ";
var name = "Molly";
var message = ", please check your order:";

var welcome = greeting + name + message;

// Variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Get element and replace the content with the welcome message
var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSub = document.getElementById('subTotal');
elSub.textContent = '$' + subTotal;

var elShip = document.getElementById('shipping');
elShip.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;