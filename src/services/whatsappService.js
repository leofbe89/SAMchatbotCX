
const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");

function SendMessageWhatsApp(data){ 

    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/129578616908565/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAAVROue4zIkBO8lzdS3ivE2J3OCi8F47ZBoLfBoXZCZCNZC8QTYnT4S5UlVBpHGGuZBdtTKZAvZCMNDMFKlzoLMyNP7yZB719x2680DqTOC8aZCx6GP06MIZA5GQZBp0e900bLUpxd6XMNYZCamCwoWiwnXIPgIo5gwZBnOZA8tEZConp7pwjyulZCHBvTZBmUZAYeSf0GGSR3YwPBv3xWAoiC72SS"
        }
    };
    const req = https.request(options, res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};