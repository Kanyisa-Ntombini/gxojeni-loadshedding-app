# Important Links

## How to send a scheduled message

- https://www.twilio.com/docs/messaging/features/message-scheduling
- How to get the Message Service SID: https://www.twilio.com/docs/messaging/services/tutorials/send-messages-with-messaging-services#why-use-a-messaging-service

## EskomSePush API

### API Limits

- Status & Area Information count for a single request
- Area Information has a ?test parameter; which does not count toward your quota. Use it for development!
- For free accounts: Areas Search, Areas Nearby & Topics Nearby count as 5 calls toward your request quota These don't need to be called automatically or often
- The Check Allowance can be called to check your quota used & remaining. This doesn't count against your quota.

### Base URLs for different services

- GET Status -> https://developer.sepush.co.za/business/2.0/status
- GET Area Information -> https://developer.sepush.co.za/business/2.0/area
- GET Areas Nearby (GPS) -> https://developer.sepush.co.za/business/2.0/areas_nearby
- GET Areas Search (Text) -> https://developer.sepush.co.za/business/2.0/areas_search
- GET Check Allowance -> https://developer.sepush.co.za/business/2.0/api_allowance

### GET Area Information

#### Testing

Include the &test=current or &test=future to get SAMPLE data returned in the events. current will return a loadshedding event which is occurring right now, and future will return an event starting on the next hour.
