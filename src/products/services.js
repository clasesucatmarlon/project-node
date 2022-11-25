// es la capa para gestionar los datos y la comunicación con la base de datos

const { Database } = require('../database/index');
const { ObjectId } = require('mongodb');  // permite hacer búsquedas mediante Id

// Collection BD
const COLLECTION = 'products';

/**
 * This function returns all the products in the database as an array
 * 
 * @return An array of products
 */
const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray(); // devuelve todos los productos en un array
};

/**
 * Get the collection from the database, then find the document with the given id
 * 
 * @param id The id of the document to be retrieved
 * @return The collection.findOne() method returns a single document that satisfies the specified query
 * criteria
 */
const getById = async (id) => {
    const collection = await Database(COLLECTION);
    return collection.findOne({ _id: ObjectId(id) });
};

/**
 * It takes a product object, inserts it into the database, and returns the id of the inserted product
 * 
 * @param product {
 * @return The insertedId is being returned
 */
const createProd = async (product) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;
};

/**
 * This function deletes a product from the database
 * 
 * @param id The id of the product to be deleted
 */
const deletedProd = async (id) => {
    const collection = await Database(COLLECTION);
    let result = await collection.deleteOne({ _id: ObjectId(id) });
};

module.exports.ProductsService = {
    getAll,
    getById,
    createProd,
    deletedProd
};
