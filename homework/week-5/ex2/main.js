window.onload = function() {
 	var countrygroup = document.getElementById(id);
 	var str = document.getElementById("population").innerHTML;
	var countrydata = str;
    var countries = JSON.parse(countrydata);
    // color array
    var colors = ["#662506", "#993404", "#cc4c02", "#ec7014", "#fe9929", "#fec44f", "#fee391", "#fff7bc","#f9f9f9","#ffffe5"];

    // loop through country codes (NL) and make them lower case (nl)
    for (x = 0; x < countries.countries.country.length; x++) { 
    	var countrycode = countries.countries.country[x].countryCode;
    	var countrylower = countrycode.toLowerCase();
    	var population = countries.countries.country[x].population;

    	// Create a fill color for every popylation group
    	if (population > 1000000000){
    		changeColor(countrylower, colors[0]);    	
    	} else if (population > 500000000){
    		changeColor(countrylower, colors[1]);    	
    	} else if (population > 100000000){
    		changeColor(countrylower, colors[2]);    	
    	} else if (population > 50000000){
    		changeColor(countrylower, colors[3]);    	
    	} else if (population > 10000000){
    		changeColor(countrylower, colors[4]);    	
    	} else if (population > 5000000){
    		changeColor(countrylower, colors[5]);    	
    	} else if (population > 100000){
    		changeColor(countrylower, colors[6]);    	
    	} else if (population > 50000){
    		changeColor(countrylower, colors[7]);    	
    	} else if (population > 1000){
    		changeColor(countrylower, colors[8]);    	
    	} else if (population > 0){
    		changeColor(countrylower, colors[9]);    	
        }             	   	
	}
}
/* changeColor takes a path ID and a color (hex value)
and changes that path's fill color */
function changeColor(id, color) {   
	var country = document.getElementsByClassName(id);
	for (i = 0; i < country.length; i++){
		country[i].style.fill = color;
	}
}
