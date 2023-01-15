const axios = require('axios');
const apiKey = '41ac969b72bf4e060230ca40a68ef22a';

async function getCoordinates(city, state, countryCode, limit) {
   const urlToFetch = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${countryCode}&limit=${limit}&appid=${apiKey}`;
   // const urlToFetch = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${apiKey}`;
   const response = await axios.get(urlToFetch);
   console.log(response.data[0].name);
   console.log(response.data[0].lat);
   console.log(response.data[0].lon);
   console.log(response.data[0].state);
   console.log(response.data[0].country);
}

getCoordinates('midrand', 'gauteng', 'ZA', 5);