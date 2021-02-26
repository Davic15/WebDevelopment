var hotItems = document.querySelectorAll("li.hot");
if (hotItems.length > 0){
    //Loop through each item
    for (var i = 0; i < hotItems.length; i++){
        // Change value of the class attibute
        hotItems[i].className = "cool";
    }
}