const { getWeatherData } = require('./get_weather_data');

console.log(`Molweni`);
getWeatherData('midrand', 'gauteng', 'za', 5)
  .then((res) => {
    console.log(res.minTemp);
   //  Send message to Mama with Twilio
  })
  .catch((err) => {
    console.log('We have an error folks: Here is the message:');
    console.log(err.message);
  });
