const fs = require("fs");
const https = require("https");
const processMessage = require("../shared/processMessage");
const gptConsole = new console.Console(fs.createWriteStream("gptLogs.txt"));

function SendToGpt(userMessage, number1) {
    gptConsole.log("entra a la clase");

    var options = {
        'method': 'POST',
        'hostname': 'api.openai.com',
        'path': '/v1/chat/completions',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-'
        },
        'maxRedirects': 20
    };

    var req = https.request(options, res => {

        res.on("data",  d => {
            var responseJson = JSON.parse(d);
            var responseTxt = responseJson.choices[0].message.content;

            gptConsole.log("r1: " + responseTxt);
            processMessage.sendToWhatsapp(responseTxt, number1);

            gptConsole.log("__________________respuesta enviada");
            return "Finish";
        });
    });

    req.on("error", error => {
        gptConsole.log("error" + error);
        return "se obtuvo un error";
    });

    var postData = JSON.stringify({
        "model": "gpt-3.5-turbo-0301",
        "messages": [
            {
                "role": "system",
                "content": "Eres notario colombiano, escribe todo como texto plano"
            },
            {
                "role": "user",
                "content": userMessage
            }
        ]
    });

    req.write(postData);

    req.end();
    gptConsole.log("Sale de la clase")
}



module.exports = {
    SendToGpt, gptConsole
};

