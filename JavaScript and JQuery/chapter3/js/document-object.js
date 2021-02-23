// Create the variable
// Find the title of the document and save it in the msg variable
var msg = "<p><b>page title: </b>" + document.title + "<br />";
// Find the url of the document and save it in the msg variable
msg += "<b>page address: </b>" + document.URL + "<br />";
// Find the date when the document was last modified and save it in the msg variable
msg += "<b>last modified: </b>" + document.lastModified + "</p>";

// Update the HTML
var el = document.getElementById("footer");
el.innerHTML = msg;