//Author: Venkata Satya Ravi Kiran Boggavarapu
//Student ID: 1001541261
//All work in this document is my original work. 
//As far as my knowledge, I did not copied any of the content that is present in this file 
$(document).ready(function(){ //Faster loading. loads the script after loading the document(webpage). 
	$("button").click(function(){ //Submit button triggers this function.
        var longitude = document.getElementById("longitude").value;//user input of longitude
	    var latitude = document.getElementById("latitude").value;//and latitude
        var location = longitude.concat(",").concat(latitude);//join both of them with a comma(,) to form a string that represents coordinates.
        var urlLocation = "https://api.weather.gov/points/"+location+"/stations";//the web service to retrieve the nearets weather station.
    	$.getJSON(urlLocation, function(locationData) {	//HTTP GET request to get the JSON from the web service.
            var station = locationData.features[0].properties.stationIdentifier;//extract the station name from the JSON.
            document.getElementById("location").innerHTML = "Nearest Station: " + station;//output the station name to the HTML page.
            var urlStation = "https://api.weather.gov/stations/"+station+"/observations/current";//address of the web serive to get the weather details.
            $.getJSON(urlStation, function(stationData) {//HTTP GET request to get the JSON from the web service.
                document.getElementById("temperature").innerHTML = "Current Temperature: " + Math.round(stationData.properties.temperature.value)+" degrees celsius";//ouput current temperature,
                document.getElementById("dewpoint").innerHTML = "Dew Point: " + Math.round(stationData.properties.dewpoint.value)+" degrees celsius";//ouput dew point,
                document.getElementById("winddirection").innerHTML = "Wind Direction: " + Math.round(stationData.properties.windDirection.value)+" degrees angle";//output wind direction,
                document.getElementById("windspeed").innerHTML = "Wind Speed: " + Math.round(stationData.properties.windSpeed.value)+" m/s";//and output wind speed to the HTML page.
            });
        });
	});
});
//References:
//1) https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
//2) https://api.jquery.com/jquery.getjson/
//3) https://api.jquery.com/click/
//4) https://api.weather.gov/stations/KGPM/observations/current
//5) https://api.weather.gov/points/32.7357,-97.1081/stations
//6) https://forecast-v3.weather.gov/documentation