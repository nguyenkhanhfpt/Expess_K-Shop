const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controller');

router.get('/login', controller.index);

router.post('/login', controller.login);

module.exports = router;