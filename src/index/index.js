const express = require('express');
const createError = require('http-errors');

const { ResponseErrors } = require('../common/response');

/* A function that is being exported. */
module.exports.IndexAPI = (app) => {
    const router = express.Router();
    
    router.get('/', (req, res) => {
        const menu = {
            products: `https://${req.headers.host}/api/products`,
        };
        ResponseErrors.success(res, 200, "API Inventary", menu);
    });
    app.use('/', router);
};

/* This is a function that is being exported. */
module.exports.NotFoundAPI = (app) => {
    const router = express.Router();
    router.all('*', (req, res) => {
        ResponseErrors.error(res, new createError.NotFound());
    });
    app.use('/', router);
};