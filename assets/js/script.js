// Event listener for search button
var searchBtn = document.querySelector("#searchbtn")
var searchInput = document.querySelector("#search")
var searchHistory = document.querySelector("#search-history")
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
        var weather = data
        localStorage.setItem("weatherData", JSON.stringify(weather));
        displayWeather(weather);
    });
    //Current date and time 
    // var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    // var today = moment().format('dddd')
  
    // dailyWeather.text
    // var weeklyWeather = document.querySelector("#weekly-weather").setAttribute("style", "visibility: visible;")
}

function displayWeather(weather){
  var currentDate = moment().format("MMM Do YY"); 
  var weatherCard = document.querySelector(".card-body")
  var weatherData = document.querySelector(".card-text")
  var weatherDay = moment().format('dddd')
  weatherData.textContent("City: " + weather.name + "<br />" 
  + "Date: " + weatherDay + "<br />" +
  weatherIcon()
  + "Temp: " + weather.main.temp + "Humidity: " + weather.main.humidity + " <br />"
  + "Wind Speed: "  + weather.wind.speed + "UV index: " + weather.UVindex)
  weatherCard.appendChild(weatherData); 
  weatherCard.appendChild(currentDate);
  console.log(weatherData)
  console.log(currentDate)
}

function weatherIcon(weather){
  if(weather){
    console.log(weather)
  }
}


function getCityInfo(){
  var city = $("#search").val().trim();
  if(city){
    getWeatherData(city);
    historyLog(); // function to add the cities to the history
  } else {
    const errorDiv = document.querySelector("#errorDiv");
    const errorMsg = document.textContent("Make sure the city you entered is spelled correctly").setAttribute("style", "color: red;")
    errorDiv.appendChild(errorMsg);
  }
  
}

//puts the city in the Search History
function historyLog(){
  //  if city has already been searched, don't re add,
  // but if the city info is has results add the city name to the history
}

//fucntion that when a city in the search history is clicked, re displays the weather info


searchBtn.addEventListener("click", getCityInfo);
