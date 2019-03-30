"use strict";

const routes =  require('express').Router();

routes.get('/', (req, res) => {
    res.send("Hello Worl");
});

module.exports = routes;