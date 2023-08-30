import { PRIVATE_TWILIO_SID, PRIVATE_TWILIO_AUTH_TOKEN } from '$env/static/private'
import TwilioSDK from 'twilio/lib';

const client = TwilioSDK(PRIVATE_TWILIO_SID, PRIVATE_TWILIO_AUTH_TOKEN)

// const client = require('twilio')(PRIVATE_TWILIO_SID, PRIVATE_TWILIO_AUTH_TOKEN)

export default client;