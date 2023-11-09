const axios = require('axios');
require('dotenv').config();
const { ESP_TOKEN } = process.env;

const baseUrl = `https://developer.sepush.co.za/business/2.0/status`;

const getStatus = async () => {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        token: ESP_TOKEN,
      },
    });
    if (response.status === 200) {
      return response.data.status.eskom;
    }
  } catch (error) {
    console.log(error);
  }
};
getStatus().then((res) => console.log(res));

module.exports = { getStatus };

/*
EXAMPLE OF OUTPUT
{
  name: 'Eskom',
  next_stages: [
    { stage: '2', stage_start_timestamp: '2023-11-09T16:00:00+02:00' },
    { stage: '0', stage_start_timestamp: '2023-11-10T05:00:00+02:00' },
    { stage: '2', stage_start_timestamp: '2023-11-10T16:00:00+02:00' },
    { stage: '0', stage_start_timestamp: '2023-11-11T05:00:00+02:00' },
    { stage: '2', stage_start_timestamp: '2023-11-11T16:00:00+02:00' }
  ],
  stage: '0',
  stage_updated: '2023-11-09T05:00:00.536028+02:00'
}
*/
