const fs = require("fs");
const https = require("https");

const gptConsole = new console.Console(fs.createWriteStream("gptLogs.txt"));

async function SendToGpt(userMessage) {
    gptConsole.clear();
    var options = {
        'method': 'POST',
        'hostname': 'api.openai.com',
        'path': '/v1/chat/completions',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        'maxRedirects': 20
    };

    var req = await https.request(options, res => {

        res.on("data", d => {

            gptConsole.log("r1: " + d);

            var responseJson = JSON.parse(d);

            var responseTxt = responseJson.choices[0].message.content;
            return responseTxt;
        });
    });

    req.on("error", error => {
        gptConsole.error(error);
        return "se obtuvo un error";
    });

    var postData = JSON.stringify({
        "model": "gpt-3.5-turbo-0301",
        "messages": [
            {
                "role": "system",
                "content": "Eres un gran asistente"
            },
            {
                "role": "user",
                "content": userMessage
            }
        ]
    });

    req.write(postData);

    req.end();
    
}



module.exports = {
    SendToGpt, gptConsole,getResponse
};

