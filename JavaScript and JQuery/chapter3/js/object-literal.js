// Set up the object
var hotel = {
    name: "Quay",
    rooms: 40,
    booked: 25,
    checkAvailability : function() {
        // I use "this" inside the function
        return this.rooms - this.booked;
    }
};

// Update the HTML 
// Get the element
var elName = document.getElementById("hotelName");
// Update HTML with property of the object
elName.textContent = hotel.name;

// Get the element
var elRooms = document.getElementById("rooms");
// Update HTML with property of the object
elRooms.textContent = hotel.checkAvailability();