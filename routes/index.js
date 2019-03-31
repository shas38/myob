// This file handles the base route
"use strict";

const routes =  require('express').Router();

routes.get('/', (req, res) => {
    res.send("Hello World"); // Reply with "Hello World"
});

module.exports = routes; 