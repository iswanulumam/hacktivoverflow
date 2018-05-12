const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const users = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', users);

module.exports = app;
