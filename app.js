"use strict";

const express = require('express');
const app = express();

const port = 3000

app.use('/', require('./routes/index'));
app.use('/health', require('./routes/health'));
app.use('/metadata', require('./routes/meta'));

let server = app.listen(port, () => console.log(`Listening on ${port}`));
module.exports = server;