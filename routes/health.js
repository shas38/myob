"use strict";

const health = require('express').Router();


health.get('/', (req, res) => {
    res.status(200).json({ status: 200 });
});

module.exports = health;