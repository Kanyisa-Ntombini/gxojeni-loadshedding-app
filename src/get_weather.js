const axios = require('axios');
const { kelvinToCelcius } = require('./kelvin_to_celsius.js');
require('dotenv').config();
const { API_KEY } = process.env;

const getWeatherData = async (town, state, countryCode, limit) => {
  let lat = null;
  let lon = null;
  let townCoordinates = null;
  let weatherResponse = null;

  try {
    townCoordinates = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${town}&limit=${limit}&appid=${API_KEY}`
    );
  } catch (error) {
    console.log(error);
  }

  if (
    townCoordinates.status === 200 &&
    townCoordinates.data[0].name.toLowerCase() == town &&
    townCoordinates.data[0].country.toLowerCase() === countryCode &&
    townCoordinates.data[0].state.toLowerCase() === state
  ) {
    lat = townCoordinates.data[0].lat;
    lon = townCoordinates.data[0].lon;
  }

  try {
    weatherResponse = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
  } catch (error) {
    console.log(error);
  }

  const mainTemp = kelvinToCelcius(weatherResponse.data.list[0].main.temp);
  const feelsLikeTemp = kelvinToCelcius(
    weatherResponse.data.list[0].main.feels_like
  );
  const minTemp = kelvinToCelcius(weatherResponse.data.list[0].main.temp_min);
  const maxTemp = kelvinToCelcius(weatherResponse.data.list[0].main.temp_max);
  const pressure = weatherResponse.data.list[0].main.grnd_level;
  const humidity = weatherResponse.data.list[0].main.humidity;

  const clouds = weatherResponse.data.list[0].clouds.all;
  const windSpeed = weatherResponse.data.list[0].wind.speed;
  const windDirection = weatherResponse.data.list[0].wind.deg;
  const visibility = weatherResponse.data.list[0].visibility;
  const probabilityRain = weatherResponse.data.list[0].pop;
  
  return {
    mainTemp,
    feelsLikeTemp,
    minTemp,
    maxTemp,
    pressure,
    humidity,
    clouds,
    windSpeed,
    windDirection,
    visibility,
    probabilityRain,
  };
}

module.exports = {getWeatherData}