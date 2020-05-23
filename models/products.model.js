const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    nameProduct: String,
    price: Number,
    imageProduct: String
});

const Products = mongoose.model('Products', productsSchema, 'products');

module.exports = Products;