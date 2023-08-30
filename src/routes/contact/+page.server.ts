import Twilio from '$lib/utils/twilio';
import { PRIVATE_TWILIO_NUMBER } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        // Default Post Action
        const data = await request.json()
        console.log("We got a server-side request!")
        console.log(data);
        await Twilio.messages.create({
            body: "Hello, Welcome to Patrush! Schedule an appointment with one of our professionals. https://calendar.app.google/7JTxMtFcf6XbYsu68",
            to: data.phoneNumber,
            from: PRIVATE_TWILIO_NUMBER
        }).then(res => {
            if (res.errorMessage) {
                console.log("Error")
                console.log(res.errorCode);
                console.log(res.errorMessage);
                return fail(500, { message: res.errorMessage});
            } else {
                console.log("Success!")
                return { success: true }
            }
        })
    }
}