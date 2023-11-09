require('dotenv').config();
const {
  TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID,
  TWILIO_PHONE_NUMBER,
  MY_PHONE_NUMBER,
  MESSAGE_SERVICE_SID,
} = process.env;

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const getAllMessages = () => {
  client.messages.list({ limit: 20 }).then((messages) =>
    messages.forEach((message) => {
      console.log(message);
    })
  );
};

const sendMessage = () => {
  client.messages
    .create({
      from: TWILIO_PHONE_NUMBER,
      body: 'Hello! This is sent from the vs code program',
      to: MY_PHONE_NUMBER,
    })
    .then((response) => console.log(response));
};

const sendScheduledMessage = () => {
  client.messages
    .create({
      body: 'I am sending a scheduled message from my vs code program',
      messagingServiceSid: MESSAGE_SERVICE_SID,
      sendAt: new Date(Date.UTC(2023, 10, 9, 20, 30, 0)),
      scheduleType: 'fixed',
      to: MY_PHONE_NUMBER,
    })
    .then((response) => console.log(response));
};
