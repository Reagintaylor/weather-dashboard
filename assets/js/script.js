// Event listener for search button
var searchBtn = document.querySelector("#searchbtn")
var searchInput = document.querySelector("#search")

function getWeatherData(){
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';
    // console.log(fetch(requestUrl));

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
      
    })
    .then(function (data) {
        console.log(data)
      //looping over the fetch response and inserting the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        //Create a list element
        var listItem = document.createElement('li');
        var repoLinks = document.createElement( "a");

        //Set the text of the list element to the JSON response's .html_url property
        // listItem.textContent = data[i].html_url;
        repoLinks.textContent = data[i].html_url;

        var repoList = document.querySelector("section")
        //Append the li element to the id associated with the ul element.
        repoList.appendChild(listItem);
        listItem.appendChild(repoLinks);
      }
    });
}

searchBtn.addEventListener("click", getWeatherData);
