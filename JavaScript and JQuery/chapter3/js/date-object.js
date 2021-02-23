// Create a variable to hold a new Date object (default to now)
var today = new Date();
// Create a variable to hold the year (current year)
var year = today.getFullYear();

// Update HTML
var el = document.getElementById("footer");
el.innerHTML = "<p>Copyright &copy;" + year + "</p>";