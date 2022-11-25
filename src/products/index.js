const express = require('express');
const router = express.Router();
const { ProductsController } = require('./controller');

module.exports.ProductsAPI = (app) => {
    router
        .get('/', ProductsController.getProducts)     // http://localhost:3000/api/products/
        .get('/:id', ProductsController.getProduct)   // http://localhost:3000/api/products/23
        .delete('/:id', ProductsController.deleteProduct)   // http://localhost:3000/api/products/23
        .post('/', ProductsController.createProduct);  // http://localhost:3000/api/products/

    app.use('/api/products', router);
};
