const { MongoClient } = require("mongodb");
const debug = require("debug")("app:module-database");
const {Config} = require('../config/index');

var connection = null;

module.exports.Database = (collection) => new Promise( async (resolve, reject) => {
    try {
        if (!connection) {
            // Conectar a la BD
            const client = new MongoClient(Config.mongoUri);
            connection = await client.connect();
            debug(`New connection made with MongoDB Atlas...`);
        }
        debug(`Using conexion...`);
        // BD a la que se quiere conectar
        const db = connection.db(Config.mongoDbname);
        // resolver la conección
        resolve(db.collection(collection));
    } catch (error) {
        reject(error);
    }
});
