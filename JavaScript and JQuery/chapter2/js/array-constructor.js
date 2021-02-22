/*
    Create and name the variable
    Tell the interpreter it is an array
    Assign values inside the parentheses
*/

var colors = new Array('white', 'black', 'custom');

var el = document.getElementById('colors');
el.textContent = colors[0];