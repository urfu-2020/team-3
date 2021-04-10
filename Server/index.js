const express = require('express');
const app = express();
require('./routes')(app)

const port = process.env.PORT || 80;

app.listen(port);