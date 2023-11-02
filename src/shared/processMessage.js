const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");
const config = require("./config");

function Process(textUser, number) {
    textUser = textUser.toLowerCase();
    const matchedPattern = config.patterns.find(item => item.pattern.test(textUser));
    var response = [];
    if(textUser.includes("hola")){
        //SALUDAR
        var model = whatsappModel.MessageText("Hola soy SAM 👨‍💼 tu asistente notarial, un gusto saludarte!. 👋\n ¿Qué deseas hacer a continuación?", number);
        response.push(model);
        var menu = whatsappModel.MessageButtonsMenu(number);
        response.push(menu);
        }
        else if (matchedPattern && config.actions[matchedPattern.response]) {
            var modelList = config.actions[matchedPattern.response](number);
            response.push(modelList);
        }
        else {
        var model = whatsappModel.MessageText("No entiendo lo que dices ¿Deseas preguntarle a SAM? Asesor virtual?   *SI* o *NO* en forma de quick reply", number);
        response.push(model);
        // var menu = whatsappModel.MessageButtonsMenu(number);
        // response.push(menu);
    }

    response.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    Process
};
