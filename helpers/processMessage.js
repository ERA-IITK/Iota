const API_AI_TOKEN = "31aaf7337fc7494c9822d0cb19acc17b";
const apiAiClient = require("apiai")(API_AI_TOKEN);
const FACEBOOK_ACCESS_TOKEN = "EAADmrtNoM2oBAO6QReJw23LW1iaWJZCKk0bFt6wgMzNNywJ7GZB9yrqmcLDtJ8nhlXyTFSCBjLpjjwfrxfx9tmUQztAWKOpjMwrT8WEy2ZCjgtdO2yKM5BqqeMoaVu5xEmGbUhZBWsTU63fPkJMQ32IQYHZCRQ21FMcWNxcK5sXfVRC2CZA9ZAH";
const request = require("request");
const sendTextMessage = (senderId, text) => {
    request({
        url: "https://graph.facebook.com/v4.0/me/messages",
            qs: {
                access_token: FACEBOOK_ACCESS_TOKEN
            },
        method: "POST",
        json: {
            recipient: {
                id: senderId
            },
            message: {
                text
            },
        }
    });
};
module.exports = (event) => {
    const senderId = event.sender.id;
    const message = event.message.text;
    const apiaiSession = apiAiClient.textRequest(message, {
        sessionId: "era_bot"
    });
    apiaiSession.on("response", (response) => {
        const result = response.result.fulfillment.speech;
        sendTextMessage(senderId, result);
    });
    apiaiSession.on("error", error => console.log(error));
    apiaiSession.end();
};