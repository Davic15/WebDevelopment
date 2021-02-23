// Create a variable to hold a new date object (defaults to now)
var today = new Date();
// Get the year (current year)
var year = today.getFullYear();
// Set the date that the company was established
var est = new Date('Apr 16, 1995 15:45:55');
// Get difference between then & now in milliseconds
var difference = today.getTime() - est.getTime();
// Divide by number of milliseconds to get years
difference = (difference / 31556900000);
// Update HTML
var elMsg = document.getElementById("message");
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';