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
                "text": "Selecciona una de nuestras opciones\n*Asesor Virtual* _es una inteligencia artificial equipada con conocimiento juridico para resolver tus inquietudes_ 👨‍💼\n*Menu de opciones* _podras consultar requisitos, horarios, solicitar copias, entre otras._ "
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
                                "title": "Requisitos reg civil",
                                "description": "Consulta de requisitos de registro civil"
                            },
                            {
                                "id": "regcivCopias",
                                "title": "Copias reg civil",
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
function MessageRequisitosESC(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "template",
        "template": {
            "name": "esc_requisitos",
            "language": {
                "code": "es_MX"
            },
            "components": [
                {
                    "type": "header",
                    "parameters": [
                        {
                            "type": "image",
                            "image": {
                                "link": "https://www.notariadecima.com/static/media/Oficina13.7b1f7729.jpg"
                            }
                        }
                    ]
                },
                {
                    "type": "button",
                    "sub_type": "url",
                    "index": "0",
                    "parameters": [
                        {
                            "type": "payload",
                            "text":"https://www.notariadecima.com/tramites={{1}}",
                            "payload": "pageTramites"
                        }
                    ]
                }
            ]
        }
    });
    return data;
}
function MessageEstadoTramite(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "En esta seccion podras consultar el estado de tu tramite o radiacion\n podras elegir entre las siguientes opciones:\n consulta por número *Radicación* \n consulta por número de *Escritura*\n consulta por *Cédula o NIT*"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "consultaRadicacion",
                            "title": "Consulta radicacón"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "consultaEscritura",
                            "title": "Consulta escritura"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "consultaDocumento",
                            "title": "Consulta documento"
                        }
                    }
                ]
            }
        }
    });
    return data;
}
function MessageCopiasEscrituras(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type":"image",
        "image": {
            "link": "https://salesianas.org/wp-content/uploads/2018/01/construccion.jpg"
        }
    });
    return data;
}
function MessageRegistroCivilRequisitos(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "En esta seccion podras consultar sobre requisitos, podras elegir entre registros civiles de Nacimientos, Matrimonios o Defunciones"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "regcivRequisitosNAC",
                            "title": "Req Nacimientos"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "regcivRequisitosMAT",
                            "title": "Req Matrimonios"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "regcivRequisitosDEF",
                            "title": "Req Defunciones"
                        }
                    }
                ]
            }
        }
    });
    return data;
}
function MessageRegistroCivilCopias(number) {
         const data = JSON.stringify({
             "messaging_product": "whatsapp",
             "to": number,
             "type": "interactive",
             "interactive": {
                 "type": "button",
                 "body": {
                     "text": "En esta seccion podras solicitar copiasde registros civiles de Nacimientos, Matrimonios o Defunciones."
                 },
                 "action": {
                     "buttons": [
                         {
                             "type": "reply",
                             "reply": {
                                 "id": "regcivCopiasNAC",
                                 "title": "Copia Nacimientos"
                             }
                         },
                         {
                             "type": "reply",
                             "reply": {
                                 "id": "regcivCopiasMAT",
                                 "title": "Copia Matrimonios"
                             }
                         },
                         {
                             "type": "reply",
                             "reply": {
                                 "id": "regcivCopiasDEF",
                                 "title": "Copia Defunciones"
                             }
                         }
                     ]
                 }
             }
         });
         return data;
}
// function MessageRequisitos_2(number) {
//     const data = JSON.stringify({
//         "messaging_product": "whatsapp",
//         "to": number,
//         "type": "interactive",
//         "interactive": {
//             "type": "list",
//             "header": {
//                 "type": "text",
//                 "text": "Hola, menu de requisitos!"
//             },
//             "body": {
//                 "text": "_Por favor haz click en el botón de *Ver opciones* y seleciona a continuación el acto a consultar_"
//             },
//             "footer": {
//                 "text": "Notaria Décima(10) de Bucaramanga!!"
//             },
//             "action": {
//                 "button": "Ver opciones",
//                 "sections": [
//                     {
//                         "title": "Compraventas",
//                         "rows": [
//                             {
//                                 "id": "escRequisitos",
//                                 "title": "Compraventa de bienes inmuebles",
//                                 "description": "Consulta de requisitos por actos notariales"
//                             },
//                             {
//                                 "id": "escEstadoTramite",
//                                 "title": "Estado de trámite",
//                                 "description": "Consulta el estado de tu trámite o radiación"
//                             },
//                             {
//                                 "id": "escCopias",
//                                 "title": "Solicita una copia",
//                                 "description": "Soliciita una copia de tu escritura"
//                             },
//                             {
//                                 "id": "servgenHorarioUbicacion",
//                                 "title": "Horarios",
//                                 "description": "Conlta los horarios de atención"
//                             },
//                             {
//                                 "id": "servgenDirectorio",
//                                 "title": "Directorio",
//                                 "description": "Consulta directorio telefónico de la notaria"
//                             },
//                             {
//                                 "id": "otrosServicios",
//                                 "title": "Otras opciones",
//                                 "description": "Admnistración, contabilidad, turnos sábados, entre otros"
//                             }
//                         ]
//                     },
//                     {
//                         "title": "🔙🔜 Navegación",
//                         "rows": [
//                             {
//                                 "id": "requiAnterior_1",
//                                 "title": "Anterior menú",
//                                 "description": "Anterior lista de opciones"
//                             }
//                         ]
//                     }
                    
//                 ]
//             }
//         }
//     });
//     return data;
// }
// function MessageListOtrasOpciones(number) {
//     const data = JSON.stringify({
//         "messaging_product": "whatsapp",
//         "to": number,
//         "type": "interactive",
//         "interactive": {
//             "type": "list",
//             "header": {
//                 "type": "text",
//                 "text": "Hola, Haz seleccionado el manú de otros servicios!"
//             },
//             "body": {
//                 "text": "_Por favor haz click en el botón de *Ver opciones* y seleciona a continuación_"
//             },
//             "footer": {
//                 "text": "Notaria Décima(10) de Bucaramanga!!"
//             },
//             "action": {
//                 "button": "Ver opciones",
//                 "sections": [
//                     {
//                         "title": "🗄️Administración",
//                         "rows": [
//                             {
//                                 "id": "adminCopiaFactura",
//                                 "title": "Copia e factura",
//                                 "description": "Consulta de requisitos por actos notariales"
//                             },
//                             {
//                                 "id": "adminCertirete",
//                                 "title": "Certificado de retención",
//                                 "description": "Consulta el estado de tu trámite o radiación"
//                             }
//                         ]
//                     },
//                     {
//                         "title": "👪 Cotización",
//                         "rows": [
//                             {
//                                 "id": "cotizadorWeb",
//                                 "title": "Cotizador Web",
//                                 "description": "Cotizador web de servicios notariales"
//                             }
//                         ]
//                     },
//                     {
//                         "title": "📄 Otros",
//                         "rows": [
//                             {
//                                 "id": "turnosSabados",
//                                 "title": "Sabados de turno",
//                                 "description": "Consulta que notarias estan de turno los sabados"
//                             }
//                         ]
//                     }
                    
//                 ]
//             }
//         }
//     });
//     return data;
// }


// function MessageLocation(number) {
//     const data = JSON.stringify({
//         "messaging_product": "whatsapp",
//         "to": number,
//         "type": "location",
//         "location": {
//             "latitude": "7.127277261801313 ",
//             "longitude": "-73.12431741927347",
//             "name": "Notaria Décima (10) de Bucaramanga",
//             "address": "Cra. 21 #22-30, Comuna 4 Occidental, Bucaramanga, Santander"
//         }

//     });
//     return data;
// }
function MessageHorariosUbicacion(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": "573168730185",
        "type": "template",
        "template": {
            "name": "horarios_ubicacion",
            "language": {
                "code": "es_MX"
            },
            "components": [
                {
                    "type": "header",
                    "parameters": [
                        {
                            "type": "location",
                            "location": {
                                "latitude": "7.127362429264902",
                                "longitude": "-73.12410284257051",
                                "name": "Notaria Décima de Bucaramanga",
                                "address": "Cra. 21 #22-30, Comuna 4 Occidental, Bucaramanga, Santander"
                            }
                        }
                    ]
                }
            ]
        }
    });
    return data;
}

function MessageUnderConstruction (number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type":"image",
        "image": {
            "link": "https://salesianas.org/wp-content/uploads/2018/01/construccion.jpg"
        }
    });
    return data;
}
module.exports = {
    MessageText,
    MessageButtonsMenu,
    MessageListOpciones,
    MessageRequisitosESC,
    //MessageListOtrasOpciones
    MessageEstadoTramite,
    MessageCopiasEscrituras,
    MessageRegistroCivilRequisitos,
    MessageRegistroCivilCopias,
    MessageHorariosUbicacion,
    //MessageLocation,
    MessageUnderConstruction
    
};