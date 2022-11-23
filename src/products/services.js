// es la capa para gestionar los datos y la comunicación con la base de datos

const { Database } = require('../database/index');
const { ObjectId } = require('mongodb');  // permite hacer búsquedas mediante Id

// Collection BD
const COLLECTION = 'products';

// Funciones para gestionar los datos
const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray(); // devuelve todos los productos en un array
};

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    return collection.findOne({ _id: ObjectId(id) });
};

const createProd = async (product) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;
};

module.exports.ProductsService = {
    getAll,
    getById,
    createProd
};