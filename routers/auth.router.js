const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controller');
const authValidation = require('../validation/auth.validation');

router.get('/login', controller.index);

router.get('/signup', controller.viewSignup);

router.get('/logout', controller.logout);

router.post('/signup', authValidation.signup, controller.signup);

router.post('/login', controller.login);

module.exports = router;