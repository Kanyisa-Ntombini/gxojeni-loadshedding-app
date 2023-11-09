const axios = require('axios');
const eskomMessage = 'Last testing message';
require('dotenv').config();
const { ESKOM_SE_PUSH_LICENCE_KEY } = process.env;

const urlToFetch = `https://developer.sepush.co.za/business/2.0/api_allowance`;
const config = {
  headers: {},
  params: {},
};

const getData = async () => {
  try {
    const response = axios.get(urlToFetch, config);
    return response;
  } catch (error) {
    console.log(error);
  }
};
getData().then((res) => console.log(res));

module.exports = { eskomMessage };
