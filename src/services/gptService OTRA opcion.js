const fs = require("fs");
require('dotenv').config();
const gptConsole = new console.Console(fs.createWriteStream("gptLogs.txt"));
const {OpenAI} = require("openai");

async function getMessageChatGpt(text){
    gptConsole.log("entra a enviar mensaje a gpt");
    const openai = new OpenAI({apyKey: process.env.OPENAI_KEY});
    const response = await openai.createCompletion({
        engine: "text-davinci-003",
        prompt:text,
        max_tokens: 150,
    });
    if(response.status == 200 && response.data.choices.length > 0){
        gptConsole.log("r1: " + String(response.data.choices[0].text));
        return response.data.choices[0].text;   
    }else{
        return null;
    }        
}
module.exports = {getMessageChatGpt};