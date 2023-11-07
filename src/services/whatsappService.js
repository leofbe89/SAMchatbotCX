const fs = require('fs');
const { Console } = require('console')
const myConsole = new Console(fs.createWriteStream("./logs.txt"));
const https = require("https");

function SendMessageWhatsApp(data){ 

    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/129578616908565/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAAVROue4zIkBO6bRodOZAaTZBtIv7ZB7xoIiaotlCaHCwaJ7dHGJPADJjoTV5mfk6zf2J6VGhJFklHqtkMSF08de9S5hJNEs28NtcpNhwqXZA7YYZCFpa2pijOZBa6b8ztYpKSmInKJ36IOiG9lJR6L1wcTJJS8AWkcvZCwacEaYY2MJYYdSDPz2YKZALZC9s3GO7eZBZBvZB6ikvNDAdp8tv3pyDyYrmPMuypENxIzZCW7EZD"
        }
    };
    const req = https.request(options, res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        myConsole.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};