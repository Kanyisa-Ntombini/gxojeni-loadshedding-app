// const {getWeatherData} = require('./get_weather.js');
const townName = document.getElementById('townName');
const stateName = document.getElementById('stateName');
const countryName = document.getElementById('countryName');
const submitButton = document.getElementById('submitButton');
const minTemp = document.getElementById('minTemp');
const maxTemp = document.getElementById('maxTemp');

const getMinTemp = 20;
const getMaxTemp = 40;

const displayWeatherData = () => {
   console.log(townName.value)
   console.log(stateName.value)
   console.log(countryName.value)
   minTemp.innerHTML = `${getMinTemp} &#8451;`;
   maxTemp.innerHTML = `${getMaxTemp} &#8451;`;
}
submitButton.addEventListener('click', displayWeatherData)