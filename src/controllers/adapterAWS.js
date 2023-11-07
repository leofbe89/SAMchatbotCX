var AWSXRay = require('aws-xray-sdk-core');
var captureMySQL = require('aws-xray-sdk-mysql');
var mysql = captureMySQL(require('mysql2'));

const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_DATABASE;

var connection = mysql.createConnection({
  host     : host,
  user     : username,
  password : password,
  database : database,
});
connection.connect();

async function getRecord(id) {
    const query = `SELECT nombre, email FROM PRUEBA WHERE id = ${id}`;
    return new Promise((resolve, reject) => {
        connection.query(query, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
}

exports.getRecord = getRecord;

exports.handler = async (event) => {
    myConsole.log("Codigo de prueba 1 entra al metodo handler");
    var query = event.query;
    var result;
    connection.connect();

    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      myConsole.log("Ran query: " + query);
      for (result in results)
        myConsole.log(results[result]);
    });

    return new Promise( ( resolve, reject ) => {
        connection.end( err => {
            if ( err )
                return reject( err );
            const response = {
                statusCode: 200,
                body: JSON.stringify(result),
            };
            resolve(response);
        });
    });
};