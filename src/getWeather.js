const axios = require('axios');

const apiKey = '41ac969b72bf4e060230ca40a68ef22a';
const lat = null;
const lon = null;
const country = 'za';
const state = 'gauteng';


async function getWeatherData(town, limit) {
   const coordinatesURL = `http://api.openweathermap.org/geo/1.0/direct?q=${town},${state},${country}&limit=${limit}&appid=${apiKey}`;
   const getTownCoordinates = await axios.get(coordinatesURL);

   if (getTownCoordinates.status === 200) {
      if (getTownCoordinates.data[0].name === town && getTownCoordinates.data[0].country === country && getTownCoordinates.data[0].state === state) {
         lat = getTownCoordinates.data[0].lat;
         lon = getTownCoordinates.data[0].lon
      }
   }

   const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

   const response = await axios.get(weatherURL);

   console.log(response.data);
}

getWeatherData('midrand', 5);