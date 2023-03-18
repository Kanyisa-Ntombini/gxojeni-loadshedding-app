const axios = require('axios');
const { kelvinToCelcius } = require('./helper_functions');
require('dotenv').config();
const { API_KEY } = process.env;

async function getWeatherData(town, state, countryCode, limit) {
  let lat = null;
  let lon = null;
  let townCoordinates = null;
  let weatherResponse = null;

  try {
    townCoordinates = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${town}&limit=5&appid=${API_KEY}`
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
  //   const rainVolLast3Hours = kelvinToCelcius(weatherResponse.data.list[0].rain.3h);

  //   console.log(weatherResponse.data);
  //   console.log(`mainTemp = ${mainTemp}`);
  //   console.log(`feelsLikeTemp = ${feelsLikeTemp}`);
  //   console.log(`minTemp = ${minTemp}`);
  //   console.log(`maxTemp = ${maxTemp}`);
  //   console.log(`pressure = ${pressure}`);
  //   console.log(`humidity = ${humidity}`);
  // console.log(`clouds = ${clouds}`);
  //   console.log(`windspeed = ${windSpeed}`);
  //   console.log(`wind direction = ${windDirection}`);
  //   console.log(`visibility = ${visibility}`);
  //   console.log(`probability rain = ${probabilityRain}`);

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

getWeatherData('midrand', 'gauteng', 'za', 5);
