const express = require('express');
const debug = require('debug')('app:server');
const { Config } = require('./src/config/index');
const { ProductsAPI } = require('./src/products/index');
const { IndexAPI, NotFoundAPI } = require('./src/index');

const app = express();
app.use(express.json());

// Modules
IndexAPI(app);
ProductsAPI(app);
NotFoundAPI(app);

app.listen(Config.port, () => {
    debug(`Server running in port ${Config.port}`);
});