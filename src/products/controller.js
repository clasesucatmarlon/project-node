// Funciones controladoras de los endpoints

const { ProductsService } = require('./services');
const debug = require('debug')('app:module-products-controler')

module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll();
            res.json(products);
        } catch (error) {
            debug(error);
            res.status(500).json({ message: 'Internal server error...' });
        }
    },
    getProduct: async (req, res) => {
        try {
            const { params : { id }} = req;
            const product = await ProductsService.getById(id);
            res.json(product);
            debug('Product found...');
        } catch (error) {
            debug(error);
            res.status(500).json({ message: 'Internal server error...' });
        }
    },
    createProduct: async (req, res) => {
        try {
            const { body } = req;
            const insertedId = await ProductsService.createProd(body);
            res.json(insertedId);
            debug('Product inserted success..');
        } catch (error) {
            debug(error);
            res.status(500).json({ message: 'Internal server error...' });
        }
    },
};