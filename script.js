// variables needed for functions and buttons
var Search= $("#searchCity");
var apiKey= "5fee4097b9741407390bbe8f4c7afffc";
var cityName= $("#cityName");
var uvIndex= $("#uvIndex");
var windSpeed= $("#windspeed");
var temperature= $("#temperature");
// establishing on clicks
$(document).ready(function(){
    getSearches();

    $(".btn").on("click", startSearch);


    function startSearch() {
        var cityName= search.val();
        var URL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial";
        var fivedayForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey; 

        $.ajax({
            url: URL,
            method: "GET"
        }).then(function(oneDayData){
            
        }
    }
})


