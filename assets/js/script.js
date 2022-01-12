// Event listener for search button
var searchBtn = document.querySelector("#searchbtn")
var searchInput = document.querySelector("#search")
var searchHistory = document.querySelector("#search-history")
var errorHolder = document.querySelector("#weather-card")
var apiKey = ("adbfd834acb2ad11716672b9a64679a0")
  //Check if this works 

function getWeatherData(city){
    
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
      
      
    })
    .then(function (data) {
        console.log(data)
        // localStorage
    });

    // //Current date and time 
  
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    // var today = moment().format('dddd');
    // // Show the daily weather data
    var dailyWeather = document.querySelector("#daily-weather").setAttribute("style", "visibility: visible;")
    var currentWeather = document.querySelector(".card-text")
    currentWeather.innerHTML = "City: " +  city + '.<br />' + "Date:" + moment().format('MMMM Do YYYY, h:mm:ss a'); + '.<br />' 

    var weeklyWeather = document.querySelector("#weekly-weather").setAttribute("style", "visibility: visible;")
}


function getCityInfo(){
  var city = $("#search").val().trim();
  if(city){
    getWeatherData(city);
    historyLog(); // function to add the cities to the history
  } else {
    const errorDiv = document.createElement("div");
    const errorMsg = document.createTextNode("Hi there and greetings!");
    errorDiv.appendChild(errorMsg);
    errorHolder.appendChild(errorDiv);
  }
  
}

//puts the city in the Search History
function historyLog(){
  //  if city has already been searched, don't re add,
  // but if the city info is has results add the city name to the history
}

//fucntion that when a city in the search history is clicked, re displays the weather info


searchBtn.addEventListener("click", getCityInfo);
