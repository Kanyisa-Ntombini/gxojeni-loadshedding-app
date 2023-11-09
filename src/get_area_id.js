const axios = require('axios');
require('dotenv').config();
const { ESP_TOKEN } = process.env;

const baseUrl = `https://developer.sepush.co.za/business/2.0/areas_search?test`;

const getAreaId = async (nameOfArea) => {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        token: ESP_TOKEN,
      },
      params: {
        text: nameOfArea,
      },
    });
    if (response.status === 200) {
      const allAreasWithSimilarName = response.data.areas;
      for (const data of allAreasWithSimilarName) {
        console.log(data);
        console.log();
      }
    }
  } catch (error) {
    console.log(error);
  }
};
getAreaId('makhuzeni').then((res) => console.log(res));

module.exports = { getAreaId };

/*
EXAMPLE OF OUTPUT

*/
