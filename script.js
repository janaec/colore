// variables needed for functions and buttons
var Search = $("#searchTerm");
var apiKey = "5fee4097b9741407390bbe8f4c7afffc";
var cityName = $("#cityName");
var uvIndex = $("#uvIndex");
var windSpeed = $("#windspeed");
var humid= $("#humidity");
var searchCity =search.val();
var temperature = $("#temperature");
var latitude = oneDayData.coord.lat;
var longitude = oneDayData.coord.lon;
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
        
    }