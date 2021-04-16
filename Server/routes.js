const {error404, testRoute} = require('./controllers/testController')
const express = require('express');
const app = express();

app.get('/', testRoute);
app.all('*', error404);

module.exports = app;