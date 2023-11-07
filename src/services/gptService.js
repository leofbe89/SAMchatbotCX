var request = require('request-promise-native');
const fs = require("fs");
const gptConsole = new console.Console(fs.createWriteStream("gptLogs.txt"));
async function SendToGpt(textUser){
    var options = {
    'method': 'POST',
    'url': 'https://api.openai.com/v1/chat/completions',
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": "Eres un notario de colombia, experto en titulos y tierras y te sabes el estatuto notarial y el codigo civil colombiano, responde en texto plano"
        },
        {
          "role": "user",
          "content": textUser
        }
      ]
    })
  
  };
  try {
    let response = await request(options);
    let textResponse = JSON.parse(response);
    let text = textResponse['choices'][0]['message']['content'];
    gptConsole.log("Mensaje respta de gpt" + text);
    return text;
} catch (error) {
    throw new Error(error);
}
}
module.exports = {SendToGpt};
