// const {Configuration, OpenAIApi} = require("openai");
//     async function getmessageChatGPT(text){
//         const Configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY});  
//     }
//respuesta sugerida copilor    
// async function getMessageFromGPT(textUser, number){
//     const openai = new OpenAIApi(process.env.OPENAI_API_KEY);
//     const prompt = "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: "+textUser+"\nAI: ";
//     const gptResponse = await openai.complete({
//         engine: 'davinci',
//         prompt: prompt,
//         maxTokens: 150,
//         temperature: 0.9,
//         topP: 1,
//         presencePenalty: 0.6,
//         frequencyPenalty: 0.0,
//         bestOf: 1,
//         n: 1,
//         stream: false,
//         stop: ["\n", " Human:", " AI:"]
//     });
//     const message = gptResponse.data.choices[0].text;
//     return message;
//}