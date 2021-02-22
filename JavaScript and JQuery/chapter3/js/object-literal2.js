// Set up the object
var hotel = {
    name: "Park",
    rooms: 120,
    booked: 77,
    checkAvailability : function (){
        // this is used inside the function
        return this.rooms - this.booked;
    }
}

// Update he HTML
// Get the element
var elName = document.getElementById("hotelName");
// Update HTML with property of the object
elName.textContent = hotel.name;

// Get the element
var elRooms = document.getElementById("rooms");
// Update HTML with property of the object
elRooms.textContent = hotel.checkAvailability();