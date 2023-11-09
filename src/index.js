const { appResponse } = require('./app_response');

const customerSubmitButton = document.getElementById('customerSubmitButton');
const displayAppResponse = document.getElementById('displayAppResponse');
const customerRequest = document.getElementById('customerRequest');

const printAppResponse = () => {
  displayAppResponse.innerHTML = appResponse(customerRequest);
};
customerSubmitButton.addEventListener('click', printAppResponse);
