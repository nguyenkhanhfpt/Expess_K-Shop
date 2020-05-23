const express = require('express');
const router = express.Router();

const upload = require('../models/uploadImg');
const controller = require('../controllers/admin.controller');

router.get('/', controller.index);

router.get('/products', controller.getProducts);

router.get('/products/add', controller.addNew);

router.post('/products/add', upload.single('imageProduct'), controller.postAddNew);

module.exports = router;