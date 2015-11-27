/* use this to test out your function */
window.onload = function() {
 	changeColor("de", "#0000FF");
 	changeColor("pl", "#0000FF");
 	changeColor("bg", "#0000FF");
 	changeColor("cz", "#0000FF");
 	changeColor("gr", "#0000FF");
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {   
   	var country = document.getElementsByTagName("svg")[0].getElementById(id);
    console.log(country);
    country.style.fill = color;
}