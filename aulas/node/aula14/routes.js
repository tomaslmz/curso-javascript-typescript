const express = require('express');
const route = express.Router()
const home = require('./src/controller/home');

route.get('/', home.initial);
route.post('/', home.form);

module.exports = route;