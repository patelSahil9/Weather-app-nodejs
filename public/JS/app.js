var weatherApi = "/weather";
const weatherForm = document.querySelector("form");

const search = document.querySelector("input");

const weatherIcon = document.querySelector(".weatherIcon i");

const weatherCondition = document.querySelector(".weatherCondition");

const tempElement = document.querySelector(".temperature span");

const locationElement = document.querySelector(".place");

const dateElement = document.querySelector(".date");
const currentDate = new Date();
const options = { month: "long" };
const monthName = currentDate.toLocaleString("en-US", options);
dateElement.textContent = new Date().getDate() + ", " + monthName;

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(search.value);
  locationElement.textContent = "Loading...";
  weatherIcon.className = "";
  tempElement.textContent = "";
  weatherCondition.textContent = "";

});
function showData(city){
    getWeatherData(city,(result) => {
        // console.log(result);
        if (result.cod === "200") {
            weatherIcon.className = "wi wi-day-cloudy";
            locationElement.textContent = result?.name;
            tempElement.textContent = result?.main?.temp;
        }
        else {
            locationElement.textContent ="city not found";
        }
    })
}

function getWeatherData(city,callback) {
    const locationApi = `/weather?address=${city}`;
    fetch(locationApi).then((response) => {
        response.json().then((data) => {
            callback(response);
        });
    });
}