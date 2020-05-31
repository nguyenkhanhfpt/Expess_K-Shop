const express = require('express');
const route = express.Router();

const controller = require('../controllers/products.controller');

route.get('/', controller.index);

route.get('/:id', controller.viewOnePro);

module.exports = route;