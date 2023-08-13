require('dotenv').config();
const {TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, TWILIO_PASSWORD} = process.env;

const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const twilioPassword = TWILIO_PASSWORD;

const client = require('twilio')(accountSid, authToken);

client.messages
   .create({
      body: "Hello Mama. This is Kanyisa. This is my second message",
      to: '+27713975856',
      from: '+15735273488'
   })
   .then((message) => console.log(message));