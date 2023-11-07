const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");
const config = require("../shared/config");
const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
//const gptService = require("../services/gptService");

async function sendGptToWhatsapp(textUser, number) {
    var model = whatsappModel.MessageText(textUser, number);
    whatsappService.SendMessageWhatsApp(model);
    myConsole.log("mensaje enviado a whatsapp despues de gpt: " + textUser + " para el numero: " + number);
}
async function Process(textUser, number) {
    textUser = textUser.toLowerCase();
    var response = [];
    const matchedPattern = config.patterns.find(item => item.pattern.test(textUser));
    if(textUser.includes("finalizar chat")){
        process.env.FLAG_GPT = "0";
        var model = whatsappModel.MessageFinalziarChat(number);
        response.push(model);
    } else if(textUser.includes("asesor virtual")){
        var model = whatsappModel.MessageText("Escribe tu pregunta para el asesor virtual", number);
        response.push(model);
        process.env.FLAG_GPT = "1"; 
    } else if (textUser.includes("hola")) {
        var model = whatsappModel.MessageText("Hola soy SAM 👨‍💼 tu asistente notarial, un gusto saludarte!. 👋\n ¿Qué deseas hacer a continuación?", number);
        response.push(model);
        var menu = whatsappModel.MessageButtonsMenu(number);
        response.push(menu);
    } else if (matchedPattern && config.actions[matchedPattern.response]) {
        var modelList = config.actions[matchedPattern.response](number);
        response.push(modelList);
    } else {
        var model = whatsappModel.MessageText("No entiendo lo que dices ¿Deseas preguntarle a SAM? Asesor virtual?   *SI* o *NO* en forma de quick reply", number);
        response.push(model);
    }
    let uniqueResponses = new Set(response.map(JSON.stringify));
    let uniqueResponseArray = Array.from(uniqueResponses).map(JSON.parse);
    uniqueResponseArray.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
}
module.exports = {
    Process,sendGptToWhatsapp
};