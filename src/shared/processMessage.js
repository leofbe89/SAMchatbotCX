const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");
const config = require("../shared/config");
const adapterMySql = require("../controllers/adapter");

async function Process(textUser, number) {
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
        else if(textUser.includes("rad-") || textUser.includes("rad- ")){
            adapterMySql.connect();
            const parts = textUser.replace(/\s/g, '').split("-");
            const numRad = Number(parts[1]);

            try {
                const resConsulta = await adapterMySql.getRecord(numRad);
                const resConsultaAsString = String(resConsulta);
                var model = whatsappModel.MessageText(resConsultaAsString, number);
                response.push(model);
            } catch (error) {
                console.error(error);
                var model = whatsappModel.MessageText("Hubo un error al obtener el registro de la base de datos.", number);
                response.push(model);
            }
            // const resConsulta = await adapterMySql.getRecord(numRad);
            // const resConsultaAsString = String(resConsulta);
            // var model = whatsappModel.MessageText(resConsultaAsString, number);
            // response.push(model);
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
