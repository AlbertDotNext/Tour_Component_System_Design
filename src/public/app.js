const express = require('express');
const path = require('path');
// const test = require('../../index.html');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  console.log(`GET Request received for ${req.url}`);
  res.end();
});

module.exports = app;
