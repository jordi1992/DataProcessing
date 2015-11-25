/* use this to test out your function */
window.onload = function() {
 	changeColor("de", "#0000FF");
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {   
    var country = document.getElementsByClassName("de");
    country.style.fill = color;
    console.log(country);
}