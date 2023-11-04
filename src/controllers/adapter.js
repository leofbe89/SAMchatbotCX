const mysql = require("mysql");
const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};


function connect () {
  myConsole.log(process.env.DB_HOST);
  myConsole.log(process.env.DB_NAME);

  const connection = mysql.createConnection(config);
  connection.connect((err) => {
    if (err) {  
      myConsole.log("Se presento un error: "+ err);
    } else {
      myConsole.log("Conexión a la base de datos establecida");
    }
  });
};

// Método para obtener un registro de la base de datos
const getRecord = async (id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT nombre FROM PRUEBA WHERE id = ${id}`;

    connection.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.length > 0) {
          const result = results[0];
          resolve(result);
        } else {
          resolve(null);
        }
      }
    });
  });
};

// Uso de la función getRecord con async/await
async function fetchRecord() {
  try {
    const record = await getRecord(1);
    console.log(record);
  } catch (err) {
    console.error(err);
  }
}

fetchRecord();

module.exports = { 
  connect,
  getRecord,
};