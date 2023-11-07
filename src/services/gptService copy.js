const fs = require("fs");
const gptConsole = new console.Console(fs.createWriteStream("gptLogs.txt"));
const https = require('follow-redirects').https;
const processMessage = require("../shared/processMessage");

// function SendToGpt(userMessage, number1) {
//     gptConsole.log("entra a la clase");
//     var options = {
//         'method': 'POST',
//         'hostname': 'api.openai.com',
//         'path': '/v1/chat/completions',
//         'headers': {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer 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'
//         },
//         'maxRedirects': 20
//     };
//     var req = https.request(options, res => {
//         var data = "";
//         res.on("data", d => {
//             data += d;
//         });
//         res.on("end",  d => {
//             var responseJson = JSON.parse(data);
//             var responseTxt = responseJson.choices[0].message.content; 
//             gptConsole.log("r1: " + responseTxt);
//             processMessage.sendGptToWhatsapp(responseTxt, number1);

//             gptConsole.log("__________________respuesta enviada");
//             return "Finish";
//         });
//     });
//     req.on("error", error => {
//         gptConsole.log("error" + error);
//         return "se obtuvo un error";
//     });

//     var postData = JSON.stringify({
//         "model": "gpt-3.5-turbo-0301",
//         "messages": [
//             {
//                 "role": "system",
//                 "content": "Eres notario colombiano, escribe todo como texto plano"
//             },
//             {
//                 "role": "user",
//                 "content": userMessage
//             }
//         ]
//     });
//     req.write(postData);
//     req.end();
// }


async function SendToGpt(userMessage){
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
  
  var req = https.request(options, res => {
    
    var chunks = [];
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      gptConsole.log(body.toString());
      const resultGpt = body.toString();
      return resultGpt;
    });
  
    res.on("error", function (error) {
        gptConsole.error(error);
    });
  });
  
  var postData = JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "system",
        "content": "Eres un asitente de notario que conoce el estatuto notarial colombiano, escribe todo como texto plano"
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
    SendToGpt, gptConsole
};
