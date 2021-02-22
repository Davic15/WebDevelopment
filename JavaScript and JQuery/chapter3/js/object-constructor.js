// Set up the object
var hotel = new Object();
hotel.name = "Park";
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function (){
    return this.rooms - this.booked;
}

// Get element and update the HTML with the property of the object
var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elRooms = document.getElementById("rooms");
elRooms.textContent = hotel.checkAvailability();