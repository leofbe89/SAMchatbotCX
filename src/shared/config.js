const whatsappModel = require("../shared/whatsappmodels");
const config = {
  patterns: [
    { pattern: /menu/i, response: "menuOpciones" },
    //{ pattern: /otras/i, response: "otrosServicios" },
    { pattern: /requisitos escrituras/i, response: "escRequisitos" },
    { pattern: /estado/i, response: "escEstadoTramite"},
    { pattern: /consulta/i, response: "consultaRadicacion"},
    { pattern: /consulta/i, response: "consultaEscritura" },
    { pattern: /consulta/i, response: "consultaDocumento" },
    { pattern: /solicita/i, response: "escCopias" },
    { pattern: /requisitos reg civil/i, response: "regcivRequisitos" },
    { pattern: /req nacimientos/i, response: "regcivRequisitosNAC"},
    { pattern: /req nacimientos/i, response: "regcivRequisitosMAT"},
    { pattern: /req nacimientos/i, response: "regcivRequisitosDEF"},
    { pattern: /copias/i, response: "regcivCopias" },
    { pattern: /copia nacimientos/i, response: "regcivCopiasNAC" },
    { pattern: /copia matrimonios/i, response: "regcivCopiasMAT" },
    { pattern: /copia defunciones/i, response: "regcivCopiasDEF" },
    { pattern: /horarios/i, response: "servgenHorarioUbicacion" },
    //{ pattern: /siguiente/i, response: "requiSiguiente_1" },
    //{ pattern: /anterior/i, response: "requiAnterior_1" },
    
  ],
  actions: {
    "menuOpciones": whatsappModel.MessageListOpciones,
    //"otrosServicios": whatsappModel.MessageListOtrasOpciones,
    "escRequisitos": whatsappModel.MessageRequisitosESC,
    "escEstadoTramite": whatsappModel.MessageEstadoTramite,
    "consultaRadicacion": whatsappModel.MessageUnderConstruction,
    "consultaEscritura": whatsappModel.MessageUnderConstruction,
    "consultaDocumento": whatsappModel.MessageUnderConstruction,
    "escCopias": whatsappModel.MessageCopiasEscrituras,
    "regcivRequisitos": whatsappModel.MessageRegistroCivilRequisitos,
    "regcivRequisitosNAC" : whatsappModel.MessageUnderConstruction,
    "regcivRequisitosMAT" : whatsappModel.MessageUnderConstruction,
    "regcivRequisitosDEF" : whatsappModel.MessageUnderConstruction,
    "regcivCopias": whatsappModel.MessageRegistroCivilCopias,
    "regcivCopiasNAC": whatsappModel.MessageUnderConstruction,
    "regcivCopiasMAT": whatsappModel.MessageUnderConstruction,
    "regcivCopiasDEF": whatsappModel.MessageUnderConstruction,
    "servgenHorarioUbicacion": whatsappModel.MessageHorariosUbicacion,
    //"requiSiguiente_1": whatsappModel.MessageRequisitos_2,
   // "requiAnterior_1": whatsappModel.MessageRequisitos_1,
  }
};

module.exports = config;

