const APIKEY = "191c8948b49cb4681ded00fa5f32e5bf";
const degree = document.querySelector(".celcius");
const cityName = document.querySelector(".city");
const date = document.querySelector(".date");
const condition = document.querySelector(".condition");
const img = document.querySelector(".condition-img");
const searchPlace = document.querySelector(".text");
const searchButton = document.querySelector(".search");
const feelsLike = document.querySelector(".feels-like");
const pressure = document.querySelector(".pressure");
const windSpeed = document.querySelector(".wind");
const description = document.querySelector(".description");

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();

let city = "istanbul";
let userCityInput;

showUI();

searchPlace.addEventListener("change", getText);

function getText(e) {
    userCityInput = e.target.value;
}

searchButton.addEventListener("click", changeCity);

function changeCity() {
    city = userCityInput;
    getWeather();
    showUI();
    searchPlace.value = "";
}

async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}
    `);
    const weather = await response.json();
    return weather;
}

function showUI() {
    getWeather().then(weather => {
        cityName.innerHTML = weather.name;
        degree.innerHTML = `${(weather.main.temp).toFixed(1)+"&deg;"}`;
        date.innerHTML = dd + "/" + mm + "/" + yyyy;
        feelsLike.innerHTML = `Feels Like: ${(weather.main.feels_like).toFixed(1)+"&deg;"}`;
        pressure.innerHTML = `Pressure: ${weather.main.pressure} atm`;
        windSpeed.innerHTML = `Wind: ${weather.wind.speed} km/h`;
        description.innerHTML = `Description: ${weather.weather[0].description}`;
        const weatherCondition = weather.weather[0].main;
        condition.innerHTML = weatherCondition;
        if (weatherCondition === "Clear") {
            img.src = "./img/sun.png";
        }
        if (weatherCondition === "Clouds") {
            img.src = "./img/cloudy.png";
        }
        if (weatherCondition === "Rain") {
            img.src = "./img/rain.png";
        }
    }).catch(err => console.error(err));
}