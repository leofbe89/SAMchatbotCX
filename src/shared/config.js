const whatsappModel = require("../shared/whatsappmodels");
const config = {
  patterns: [
    { pattern: /menu/i, response: "menuOpciones" },
    { pattern: /otras opciones/i, response: "otrosServicios" },
    { pattern: /requisitos escrituras/i, response: "escRequisitos" },
    { pattern: /estado/i, response: "escEstadoTramite"},
    { pattern: /consulta radicacion/i, response: "consultaRadicacion"},
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
    { pattern: /directorio/i, response: "servgenDirectorio" },
// tarjetas del directorio
    { pattern: /administracion/i, response: "dirAdministracion" },
    { pattern: /registro civil/i, response: "dirRegcivilDec" },  
    { pattern: /contabilidad/i, response: "dirContabilidad" },
    { pattern: /dir juridico/i, response: "dirJuridica1" },
    { pattern: /of juridica/i, response: "dirJuridica2" },
    { pattern: /informacion/i, response: "dirInformacion" },
// Otras opciones
    { pattern: /copia de factura/i, response: "adminCopiaFactura" },
    { pattern: /certificado de retencion/i, response: "adminCertirete" },
    { pattern: /Cotizador/i, response: "cotizadorWeb" },
    { pattern: /finalizar chat/i, response: "finalizarChat" },
    //{ pattern: /siguiente/i, response: "requiSiguiente_1" },
    //{ pattern: /anterior/i, response: "requiAnterior_1" },
    
  ],
  actions: {
    "menuOpciones": whatsappModel.MessageListOpciones,
    "otrosServicios": whatsappModel.MessageListOtrasOpciones,
    "escRequisitos": whatsappModel.MessageRequisitosESC,
    "escEstadoTramite": whatsappModel.MessageEstadoTramite,
    "consultaRadicacion": whatsappModel.MessageConsultaRadicacion,
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
    "servgenDirectorio": whatsappModel.MessageDirectorio,
    // Tarjetas del directorio
    "dirAdministracion": whatsappModel.MessageDirAdministracion,
    "dirRegcivilDec": whatsappModel.MessageDirRegcivDeclaraciones,
    "dirContabilidad": whatsappModel.MessageDirContabilidad,
    "dirJuridica1": whatsappModel.MessageDirJuridica1,
    "dirJuridica2": whatsappModel.MessageDirJuridica2,
    "dirInformacion": whatsappModel.MessageDirInformacion,
    // Otras opciones menu 2
    "adminCopiaFactura": whatsappModel.MessageCopiaFactura,
    "adminCertirete": whatsappModel.MessageCertirete,
    "cotizadorWeb": whatsappModel.MessageCotizadorWeb,
    
    //"requiSiguiente_1": whatsappModel.MessageRequisitos_2,
   // "requiAnterior_1": whatsappModel.MessageRequisitos_1,
   "finalizarChat": whatsappModel.MessageFinalizarChat,
  }
};

module.exports = config;

