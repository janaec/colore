// variables needed for functions and buttons
var Search = $("#searchCity");
var apiKey = "5fee4097b9741407390bbe8f4c7afffc";
var cityName = $("#cityName");
var uvIndex = $("#uvIndex");
var windSpeed = $("#windspeed");
var temperature = $("#temperature");
var latitude = oneDayData.coord.lat;
var longitude = oneDayData.coord.lon;
// establishing on clicks
$(document).ready(function () {
    getSearches();

    $(".btn").on("click", startSearch);


    function startSearch() {
        var cityName = search.val();
        var URL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial";
        var fivedayForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
        // ajax calls
        $.ajax({
            url: URL,
            method: "GET"
        }).then(function (oneDayData) {
            var queryUV = "http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + apiKey;
            $.ajax({
                url: queryUV,
                method: "GET"
            }).then(function (uvData) {
                $.ajax({
                    url: fivedayForecast,
                    method: "GET"
                }).then(function (fiveDayData) {
                    setCard(oneDayData);
                    setUV(uvData);
                    setFiveDay(fiveDayData);
                    saveSearch();
                })
            })
        }) 
    }),
}

function setCard(input) {
    var icon = input.weather[0].icon;
    var iconURL = "http://openweathermap.org/img/w/" + icon +".png";
    $(cityName).text(input.name + "(" + moment().format('1') + ")");
    $("<img>",{
        src: iconURL,
        alt: "icon"
    }).appendTo(cityName);
    $(temperature).text("Temperature" + input.main.temp + "F");
    $(windSpeed).text("Wind Speed-" + input.wind.speed + "MPH");
    
}
