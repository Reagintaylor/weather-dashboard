// Event listener for search button
var searchBtn = document.querySelector("#searchbtn")
var searchInput = document.querySelector("#search")
var searchHistory = document.querySelector("#search-history")
var apiKey = ("adbfd834acb2ad11716672b9a64679a0")
var city = $("#search").val().trim();  //Check if this works

function getCityInfo(){
    
}


function getWeatherData(city){
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
    console.log(fetch(requestUrl));

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
      
    })
    .then(function (data) {
        console.log(data)
      //looping over the fetch response and inserting the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        //Create a list element
        var searchList = document.createElement('button');
        //Add something for them to reclick on the button

        //Set the text of the list element to the JSON response's .html_url property
        // listItem.textContent = data[i].html_url;
        searchList.textContent = data[i];

        //Append the li element to the id associated with the ul element.
        searchHistory.appendChild(searchList);
        
      }
    });
}

searchBtn.addEventListener("click", getWeatherData);
