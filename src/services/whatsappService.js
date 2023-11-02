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
            Authorization: "Bearer EAAVROue4zIkBO3GVtSRedSQgFZCJ4lalNZBVcXDE4BcZC18iXMxCuzS0LJ0ZC1LurXoVRxX0y7UrSnzdRHvCo4qZBQeXZBFGIpTC193h7p6rMOVs8lHXtltj0bTodVqFH6E37OLnx6ijhiwYxDo0C9lachZBpC4nfAoBhW5jdJygZBmp2lol5vJyZA8iArTbLgEJCTEaC3oSYUKYPte0ZD"
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