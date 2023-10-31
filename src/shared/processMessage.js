const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");
const gpt = require("../services/gptService")


async function gptProcess(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    var model = whatsappModel.MessageText("Ahora el asesor interpretará tus respuestas", number);
    models.push(model);

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
}


function Process(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];
    if (textUser.includes("hola")) {

        var model = whatsappModel.MessageText("Hola soy SAM 👨‍💼 tu asistente notarial, un gusto saludarte!. 👋\n ¿Qué deseas hacer a continuación?", number);
        models.push(model);

        var menu = whatsappModel.MessageButtonsMenu(number);
        models.push(menu);
    } else if (textUser.includes("gracias")) {

        // agradecimiento
        var model = whatsappModel.MessageText("Gracias a ti por escribirme. 😉😎", number);
        models.push(model);

    } else if (textUser.includes("menu")) {
        // menu de opciones, lista 
        var modelList = whatsappModel.MessageListOpciones(number);
        models.push(modelList);

    } else if (textUser.includes("otras")) {
        // menu de opciones, lista 
        var modelList = whatsappModel.MessageListOtrasOpciones(number);
        models.push(modelList);

    } else if (textUser.includes("escrituracion")) {
        // vender
        var model = whatsappModel.MessageText("👉 Regístrate en el siguiente formulario para poder evaluarte: https://form.jotform.com/222507994363665", number);
        models.push(model);

    } else if (textUser.includes("agencia")) {
        // agencia
        var model = whatsappModel.MessageText("Aquí tienes nuestra dirección. 😊", number);
        models.push(model);
        var modelLocation = whatsappModel.MessageLocation(number);
        models.push(modelLocation);

    } else if (textUser.includes("contacto")) {
        // vender
        var model = whatsappModel.MessageText("📞*Centro de contacto:*\n912345678", number);
        models.push(model);
    } else if (textUser.includes("asesor virtual")) {
        gptProcess(textUser,number)
    } else {
        //No entiende
        var model = whatsappModel.MessageText("No entiendo lo que dices", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });

}

function gptProcess(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    var model = whatsappModel.MessageText("Ahora el asesor interpretará tus respuestas", number);
    models.push(model);

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    Process, gptProcess
};