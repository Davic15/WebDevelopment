/*
    The script is placed inside an IIFE (immediate invoked function expression) which helps proptect the scope of variables
*/

(function (){
    // Part one: create Hotel object and write out the offer details
    //Create a hotel object using object literal syntax

    var hotel = {
        name: "Park",
        roomRate: 240,
        discount: 15,
        offerPrice : function (){
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    // Write out the hotel name, standard rate, and the special rate
    // Declare variables
    var hotelName, roomRate, specialRate;
    // Get elements
    hotelName = document.getElementById("hotelName");
    roomRate = document.getElementById("roomRate");
    specialRate = document.getElementById("specialRate");
    // Write out the hotel name, rate and special rate
    hotelName.textContent = hotel.name;
    roomRate.textContent = "$" + hotel.roomRate.toFixed(2);
    specialRate.textContent = "$" + hotel.offerPrice();

    // Part two: calculate and write out the expiry details for the offer
    // The message
    var expiryMsg;
    // Today's date
    var today;
    // The element that shows the message about the offer ending
    var elEnds;

    function offerExpires(today) {
        // Declare variables to work with, local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        // Add 7 days time (added in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        //Create arrays to hold the names of days / months
        dayNames = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Collect the parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        // Create the message
        expiryMsg = "Offer expires next ";
        expiryMsg += day + "<br /> (" + date + " " + month + " " + year + ")";
        return expiryMsg;
    }
    // Today's date in a variable
    today = new Date();
    // Get the offerEnds element
    elEnds = document.getElementById('offerEnds');
    // Add the expiry message
    elEnds.innerHTML = offerExpires(today);

}());