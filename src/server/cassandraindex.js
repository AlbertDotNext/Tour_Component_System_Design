const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./database/cassandracontroller');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
app.use('/image/', express.static(path.join(__dirname, '..', 'public', 'img')));

app.get('/tour/', controller.getTour);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server is listening on PORT', PORT));