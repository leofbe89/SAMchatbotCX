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
            Authorization: "Bearer EAAVROue4zIkBO64SmCySLNNbEvKZBRR8E6rmTiz6W56pIMhbZCQD9tZBJSn52DZBBkLTsquqdUZAmVZAz2ZBs1FlOZAbplzXMRZB97kSKyQZByZCZB2dNzIM9pZC62I0az4uYFSFZBzLzY3tjbXbocd6d3a74spheaJg6gCZAs8ehVfsbCpeCWUEVBOlcYdq53RVhkTNVFZC0zdfDCTDpKSlOoYZD"
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