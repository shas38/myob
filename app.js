"usue strict";

const express = require('express');
const app = express();
const pjson = require('./package.json');
const git = require('git-rev-sync');

const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 200 });
})

app.get('/metadata', (req, res) => {
    let result = {
        "version": pjson.version,
        "description" : pjson.description,
        "lastcommitsha": git.long()
    }
    res.status(200).json(result);
})

app.listen(port, () => console.log(`Listening on ${port}`))