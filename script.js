// variables needed for functions and buttons
var Search = $("#searchTerm");
var apiKey = "5fee4097b9741407390bbe8f4c7afffc";
var cityName = $("#cityName");
var uvIndex = $("#uvIndex");
var windSpeed = $("#windspeed");
var humid= $("#humidity");
var searchCity =search.val();
var temperature = $("#temperature");

// establishing on clicks
$(document).ready(function () {
    getSearches();

    $(".btn").on("click", startSearch);

    $(".previous").on("click","p", function(){
        lastSearch = this.textContent;
        localStorage.setItem("lastSearch", lastSearch);
        Search.val(lastsearch);
        startSearch();
    })})
    function startSearch() {
        lastSearch = searchCity;
        localStorage.setItem("lastSearch", lastSearch);
        var queryURL1=  "https://api.openweathermap.org/data/2.5/weather?q=" + seachCity + "&appid="+apiKey + "&units=imperial";
        var queryFiveDay= "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=" + apiKey + "&units=imperial";

        $.ajax({
            url: queryURL1,
            method: "GET"
        }).then(function(oneDayData){
            var latitude = oneDayData.coord.lat;
            var longitude = oneDayData.coord.lon;
            var queryUV = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;
            $.ajax({
                url: queryUV,
                method: "GET"
            }).then(function(uvData){
                $.ajax({
                    url: queryFiveDay,
                    method: "GET"
                }).then(function(fiveDayData){
                    setCard(oneDayData);
                    setUV(uvData);
                    setFiveDay(fiveDayData);
                    saveSearch();

                })
            })
        })
    }
    function setCard(input) {
        var icon = input.weather[0].icon;
        var iconURL = "http://openweathermap.org/img/w/" + icon + ".png";
        $(cityTitle).text(input.name + "(" + moment().format('1') + ")");
        $("<img>", {
            src: iconURL,
            alt: "icon"
        }).appendTo(cityTitle);
        $(temperature).text("Temperature: " + input.main.temperature + "F");
        
    }