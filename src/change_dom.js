const { getWeatherData } = require('./get_weather.js');
const rawWeatherData = getWeatherData('midrand', 'gauteng', 'za', 5);
console.log(rawWeatherData);

const submitButton = document.getElementById('submitButton');

const showWeatherData = () => {
  alert('Hello!');
};
submitButton.addEventListener('click', showWeatherData);
