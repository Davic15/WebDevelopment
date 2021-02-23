// Create a variable and save the browser windows width
var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
// Save the browser window height
msg += "<p>height: " + window.innerHeight + "</p>";
// Save the number of items in the browser window's history
msg += "<h2>history</h2><p>items: " + window.history.length + "</p>";
// Find the width of the computer screen
msg += "<h2>screen</h2><p>width: " + window.screen.width + "</p>";
// Find the height of the computer screen
msg += "<p>height: " + window.screen.height + "</p>"

// Update the HTML
var el = document.getElementById("info");
el.innerHTML = msg;
// Find the location of the current page and display it in an alert box
alert("Current page: " + window.location);