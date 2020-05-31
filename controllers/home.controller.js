const Products = require('../models/products.model');

module.exports.index = async (req, res) => {
    const products = await Products.find();
    res.render('home', {
        products: products
    });
}