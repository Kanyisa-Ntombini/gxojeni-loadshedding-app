const axios = require('axios');
require('dotenv').config();
const { CLIMATE_API_KEY } = process.env;

const getWeatherData = async (townInputPar, stateInputPar, countryCodeInputPar, limitInputPar) => {
  let townCoordinates = null;
  let weatherResponse = null;

  try {
    townCoordinates = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${townInputPar}&limit=${limitInputPar}&appid=${CLIMATE_API_KEY}`
    );
  } catch (error) {
    console.log(error);
  }

  const { name, country, state, lat, lon } = townCoordinates.data[0];

  if (
    townCoordinates.status === 200 &&
    name.toLowerCase() == townInputPar &&
    country.toLowerCase() === countryCodeInputPar &&
    state.toLowerCase() === stateInputPar
  ) {
    try {
      weatherResponse = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${CLIMATE_API_KEY}&units=metric`
      );
    } catch (error) {
      console.log(error);
    }
  }

  const { main, weather, wind, pop } = weatherResponse.data.list[0];

  return {
    minTemp: main.temp_min,
    maxTemp: main.temp_max,
    weatherDescription: weather[0].description,
    probabilityRain: pop,
    humidity: main.humidity,
    windSpeed: wind.speed,
    windDirection: wind.deg,
  };
};

const something = {
  minTemp: 10,
  maxTemp: 25,
  weatherDescription: 'sunny',
  probabilityRain: 33,
  humidity: 12,
  windSpeed: 77,
  windDirection: 55,
};

getWeatherData('midrand', 'gauteng', 'za', 5).then((res) => console.log(res));
module.exports = { something };
