const express = require('express');
const debug = require('debug')('app:server');
const { Config } = require('./src/config/index');
const { ProductsAPI } = require('./src/products/index');

const app = express();
app.use(express.json());

// Modules
ProductsAPI(app);

app.listen(Config.port, () => {
    debug(`Server running in port ${Config.port}`);
});