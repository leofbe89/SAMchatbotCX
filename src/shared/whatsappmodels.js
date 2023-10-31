function MessageText(textResponse, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "preview_url": true,
            "body": textResponse
        },
        "type": "text"
    });
    return data;
}
function MessageButtonsMenu(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Selecciona una de nuestras opciones\n*Asesor Virtual* _es una inteligencia artificial equipada con conocimiento juridico para resolver tus inquietudes_ 👨‍💼\n*Menu de opciones* podras consultar requisitos, horarios, solicitar copias, entre otras. "
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "asesorVirtual",
                            "title": "Asesor Virtual"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "menuOpciones",
                            "title": "Menu Opciones"
                        }
                    }
                ]
            }
        }
    });
    return data;
}
function MessageListOpciones(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Hola, Soy SAM!👨‍💼 Tu asesor notarial!"
            },
            "body": {
                "text": "_Por favor haz click en el botón de *Ver opciones* y seleciona a continuación_"
            },
            "footer": {
                "text": "Notaria Décima(10) de Bucaramanga!!"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "📜 Escrituración",
                        "rows": [
                            {
                                "id": "escRequisitos",
                                "title": "Requisitos Escrituras",
                                "description": "Consulta de requisitos por actos notariales"
                            },
                            {
                                "id": "escEstadoTramite",
                                "title": "Estado de trámite",
                                "description": "Consulta el estado de tu trámite o radiación"
                            },
                            {
                                "id": "escCopias",
                                "title": "Solicita una copia",
                                "description": "Soliciita una copia de tu escritura"
                            }
                        ]
                    },
                    {
                        "title": "👪 Registro civil",
                        "rows": [
                            {
                                "id": "regcivRequisitos",
                                "title": "Requisitos",
                                "description": "Consulta de requsitos de registro civil"
                            },
                            {
                                "id": "regcivCopias",
                                "title": "Solicitar copias",
                                "description": "Solciita una copia de tu registro civil"
                            }
                        ]
                    },
                    {
                        "title": "📄 Servicios generales",
                        "rows": [
                            {
                                "id": "servgenHorarioUbicacion",
                                "title": "Horarios",
                                "description": "Conlta los horarios de atención"
                            },
                            {
                                "id": "servgenDirectorio",
                                "title": "Directorio",
                                "description": "Consulta directorio telefónico de la notaria"
                            },
                            {
                                "id": "otrosServicios",
                                "title": "Otras opciones",
                                "description": "Admnistración, contabilidad, turnos sábados, entre otros"
                            }
                        ]
                    }
                    
                ]
            }
        }
    });
    return data;
}
function MessageListOtrasOpciones(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Hola, 🗄️🧾⏱️ estas en el menú de *Otras Opciones* "
            },
            "body": {
                "text": "_Por favor haz click en el botón de *Ver opciones* y seleciona a continuación_"
            },
            "footer": {
                "text": "Notaria Décima(10) de Bucaramanga!!"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "🗄️ Administración",
                        "rows": [
                            {
                                "id": "adminCopiaFactura",
                                "title": "Copia de factura",
                                "description": "Solciita una copia de tu factura"
                            },
                            {
                                "id": "adminCertirete",
                                "title": "Certificado de retención",
                                "description": "Solcicita una copia de tu certificado de retención"
                            }
                        ]
                    },
                    {
                        "title": "🧾 Cotización",
                        "rows": [
                            {
                                "id": "cotizacion",
                                "title": "Cotización",
                                "description": "Cotizador web de servicios notariales"
                            }
                        ]
                    },
                    {
                        "title": "⏱️ Otros",
                        "rows": [
                            {
                                "id": "turnosSabados",
                                "title": "Turnos sábados",
                                "description": "Consulta la notaria que atiende los sábados"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}
function MessageComprar(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Selecciona uno de los productos"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-laptop",
                            "title": "Laptop"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-computadora",
                            "title": "Computadora"
                        }
                    }
                ]
            }
        }
    });
    return data;
}

function MessageLocation(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
            "latitude": "7.127277261801313 ",
            "longitude": "-73.12431741927347",
            "name": "Notaria Décima (10) de Bucaramanga",
            "address": "Cra. 21 #22-30, Comuna 4 Occidental, Bucaramanga, Santander"
        }

    });
    return data;
}

module.exports = {
    MessageText,
    MessageListOpciones,
    MessageListOtrasOpciones,
    MessageComprar,
    MessageLocation,
    MessageButtonsMenu
};