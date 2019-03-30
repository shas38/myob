"use strict";

const meta = require('express').Router();
const git = require('git-rev-sync');
const pjson = require('../package.json');

meta.get('/', (req, res) => {
    // console.log(process.env.npm_package_description)
    let result = {
        "version": pjson.version,
        "description" : pjson.description,
        "lastcommitsha": git.long()
    }
    res.status(200).json(result);
})

module.exports = meta;