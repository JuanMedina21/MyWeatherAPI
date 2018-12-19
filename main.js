

const appKey = "e609890d47e148d29c46cbc3cba6edfc";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q="
let url;

const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search-txt");
const cityName = document.getElementById("city-name");
const icon = document.getElementById("icon");
const temperature = document.getElementById("temp");
const humidity = document.getElementById("humidity-div");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

// Fetch functions

function fetchResults(url) {
  console.log(searchInput.value)
  url = baseURL + searchInput.value + '&APPID=' + appKey;
  return fetch(url)
    .then(res => res.json())
    .then(data => generateResults(data))

}

fetchResults('https://api.openweathermap.org/data/2.5/weather?q=')


function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
};

function findWeatherDetails() {
  if (searchInput.value === "") {
        alert('Please enter the city name')
      
      }else {
        fetchResults(url);
      }
}

function generateResults(response) {
    cityName.innerHTML = response.name;
    icon.src = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    temperature.innerHTML = parseInt(response.main.temp - 234) + "°";
    humidity.innerHTML = response.main.humidity + "%";


}