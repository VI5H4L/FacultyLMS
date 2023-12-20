const express = require('express');
const route = express();
const registerController = require('../controller/registerController');

route.post('/',registerController.handleRegister);

module.exports = route;