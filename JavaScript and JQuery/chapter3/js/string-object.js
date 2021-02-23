// Create a variable called msg to hold a message
var saying = "Home sweet home";
// Find the length of the string and put it in the msg variable
var msg = "<h2>length</h2><p>" + saying.length + "</p>";
// Convert to uppercase the string and put it in the msg variable
msg += "<h2>uppercase</h2><p>" + saying.toUpperCase() + "</p>";
// Convert to lowercase the string and put it in the msg variable
msg += "<h2>lowercase</h2><p>" + saying.toLowerCase() + "</p>";
// Find the character with an index of 12 in the string and put it in the msg variable
msg += "<h2>character index: 12</h2><p>" + saying.charAt(12) + "</p>";
// Find the index number of the first instance of 'ee' and put it in the msg variable
msg += "<h2>first ee</h2><p>" + saying.indexOf('ee') + "</p>";
// Find the index number of the last instance of 'e' and put it in the msg variable
msg += "<h2>last e</h2><p>" + saying.lastIndexOf('e') + "</p>";
// Find the character with an index number in the 8-14 ranfe and put it in the msg variable
msg += "<h2>character index: 8-14</h2><p>" + saying.substring(8, 14) + "</p>";
// Find the first instance of 'me' in the string and replace it with 'w' character and put it in the msg variable
msg += "<h2>replace</h2><p>" + saying.replace('me', 'w') + "</p>";
// Update HTML
var el = document.getElementById("info");
el.innerHTML = msg;