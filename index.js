const express = require('express');
const debug = require('debug')('app:server');
const { Config } = require('./src/config/index');

const app = express();
app.use(express.json());

// Modules


app.listen(Config.port, () => {
    debug(`Server running in port ${Config.port}`);
});