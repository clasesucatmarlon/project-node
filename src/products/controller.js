// Funciones controladoras de los endpoints

const { ProductsService } = require('./services');
const debug = require('debug')('app:module-products-controler');
const { ResponseErrors } = require('../common/response');
const createError = require('http-errors');


module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll();
            ResponseErrors.success(res, 200, 'Products list', products);
        } catch (error) {
            debug(error);
            ResponseErrors.error(res);
        }
    },
    getProduct: async (req, res) => {
        try {
            const { params : { id }} = req;
            const product = await ProductsService.getById(id);
            if (!product) {
                debug(`Product with id:${id} not found...`);
                ResponseErrors.error(res, new createError.NotFound());
            } else {
                ResponseErrors.success(res, 200, `Product with id:${id} found...`, product);
                debug(`Product with id:${id} found...`);
            }
        } catch (error) {
            debug(error);
            ResponseErrors.error(res);
        }
    },
    createProduct: async (req, res) => {
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                ResponseErrors.error(res, new createError.BadRequest());
            } else {
                const insertedId = await ProductsService.createProd(body);
                ResponseErrors.success(res, 201, `Product created success`, body);
                debug('Product inserted success..');
            };
        } catch (error) {
            debug(error);
            ResponseErrors.error(res);
        }
    },
};
