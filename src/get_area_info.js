const axios = require('axios');
require('dotenv').config();
const { ESP_TOKEN } = process.env;
const { getAreaId } = require('./get_area_id');

const baseUrl = `https://developer.sepush.co.za/business/2.0/area`;

const getAreaInfo = async (nameOfArea) => {
  let areaId = await getAreaId(nameOfArea);
  console.log(`area id = ${areaId}`);
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        token: ESP_TOKEN,
      },
      params: {
        id: areaId,
        //   test: 'current',
      },
    });

    if (response.status === 200) {
      console.log(response.data.schedule.days[0]);
      console.log('-------------------------');
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
getAreaInfo('Westdene').then((res) => console.log(res));

module.exports = { getAreaInfo };

/*
EXAMPLE OF OUTPUT

# response.data

{
  events: [
    {
      end: '2023-11-11T20:30:00+02:00',
      note: 'Stage 8 (TESTING: current)',
      start: '2023-11-11T18:00:00+02:00'
    }
  ],
  info: {
    name: 'TESTING Makhuzeni (4)',
    region: 'Eskom Direct, Intsika Yethu, Eastern Cape'
  },
  schedule: {
    days: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    source: 'https://example.com/test.schedule/current'
  }
}

# response.data.schedule

{
  days: [
    { date: '2023-11-11', name: 'Saturday', stages: [Array] },
    { date: '2023-11-12', name: 'Sunday', stages: [Array] },
    { date: '2023-11-13', name: 'Monday', stages: [Array] },
    { date: '2023-11-14', name: 'Tuesday', stages: [Array] },
    { date: '2023-11-15', name: 'Wednesday', stages: [Array] },
    { date: '2023-11-16', name: 'Thursday', stages: [Array] },
    { date: '2023-11-17', name: 'Friday', stages: [Array] }
  ],
  source: 'https://example.com/test.schedule/current'
}

# response.data.schedule.days[0]

{
  date: '2023-11-11',
  name: 'Saturday',
  stages: [
    [ '12:00-14:30' ],
    [ '04:00-06:30', '12:00-14:30' ],
    [ '04:00-06:30', '12:00-14:30' ],
    [ '04:00-06:30', '12:00-14:30', '20:00-22:30' ],
    [ '04:00-06:30', '12:00-16:30', '20:00-22:30' ],
    [ '04:00-08:30', '12:00-16:30', '20:00-22:30' ],
    [ '04:00-08:30', '12:00-16:30', '20:00-22:30' ],
    [ '04:00-08:30', '12:00-16:30', '20:00-00:30' ]
  ]
}

*/
