const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");
const config = require("../shared/config");
const gptService = require("../services/gptService");
const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

async function Process(textUser, number) {
    myConsole.log("Text User: " + textUser);
    var response = [];
    const matchedPattern = config.patterns.find(item => item.pattern.test(textUser));
    if(textUser.toLowerCase().includes("finalizar chat")){
        process.env.FLAG_GPT = "0";
        var model = whatsappModel.MessageGracias(number);
        response.push(model);
    } else if(textUser.toLowerCase().includes("asesor virtual")){
        var model = whatsappModel.MessageText("Escribe tu pregunta para el asesor virtual", number);
        response.push(model);
        process.env.FLAG_GPT = "1"; 
    } else if(process.env.FLAG_GPT=="1"){
        const resultGpt = await gptService.SendToGpt(textUser);
        myConsole.log("resultGPT:    " + resultGpt);
        var model1 = whatsappModel.MessageText(resultGpt, number);
        response.push(model1);
        var fin = whatsappModel.MessageFinalizarChat(number);
        response.push(fin);
    } else if (textUser.toLowerCase().includes("hola")) {
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
    uniqueResponseArray.forEach(async model =>  {
        await whatsappService.SendMessageWhatsApp(model);
    });
}
module.exports = {
    Process
};