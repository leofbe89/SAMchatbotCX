const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");
function SendMessageWhatsApp(data){
    //hola soy fabian
    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/129578616908565/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAAVROue4zIkBOyqTkeSmGUxjPb6WSUU6dgzjqJqztgiyQ2BZC460hrspmRuwWX1xqSVMonRzg2Kk6hvYqsZCozR9gamDK5XiDgWFZCgAZCjKFi3EYph3URihZAnWZCJW83az4tMCbo56vZAXOwecJtTE2cUR0OSWZAZC8bJN6cTH7O76AZAgfbXruevRbUYfD3H4B0fprLLGVvDgaCoDoZD"
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