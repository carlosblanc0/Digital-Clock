'use strict';

const path = require('path');

const express = require('express')
const app = express();

const port = 8080;
const host = '0.0.0.0';

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`); 
