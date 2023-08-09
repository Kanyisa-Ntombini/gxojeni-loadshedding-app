const { something } = require('./get_weather.js');
console.log(something);
const {
  minTemp,
  maxTemp,
  weatherDescription,
  probabilityRain,
  humidity,
  windSpeed,
  windDirection,
} = something;

const minTempDisplay = document.getElementById('minTemp');
const maxTempDisplay = document.getElementById('maxTemp');
const weatherDescriptionDisplay = document.getElementById('weatherDescription');
const probabilityRainDisplay = document.getElementById('probabilityRain');
const humidityDisplay = document.getElementById('humidity');
const windSpeedDisplay = document.getElementById('windSpeed');
const windDirectionDisplay = document.getElementById('windDirection');

const submitButton = document.getElementById('submitButton');

const showWeatherData = () => {
  minTempDisplay.innerHTML = minTemp;
  maxTempDisplay.innerHTML = maxTemp;
  weatherDescriptionDisplay.innerHTML = weatherDescription;
  probabilityRainDisplay.innerHTML = probabilityRain;
  humidityDisplay.innerHTML = humidity;
  windSpeedDisplay.innerHTML = windSpeed;
  windDirectionDisplay.innerHTML = windDirection;
};
submitButton.addEventListener('click', showWeatherData);
