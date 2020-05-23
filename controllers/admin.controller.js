const Products = require('../models/products.model');

module.exports.index = (req, res) => {
    res.render('./admin/index');
}

module.exports.getProducts = async (req, res) => {
    const products = await Products.find();
    res.render('./admin/product/index', {
        products: products
    });
}

module.exports.addNew = (req, res) => {
    res.render('./admin/product/add');
}

module.exports.postAddNew = async (req, res) => {
    const imageProduct = req.file.originalname;
    const data = {
        nameProduct : req.body.nameProduct,
        price: parseInt(req.body.price),
        imageProduct: imageProduct
    };

    await Products.create(data);

    res.redirect('/admin/products');
}

module.exports.delete = async (req, res) => {
    const {id} = req.params;
    await Products.deleteOne({_id: id});
    res.redirect('/admin/products');
}

module.exports.viewPro = async (req, res) => {
    const {id} = req.params;
    const product = await Products.findOne({_id: id});
    res.render('./admin/product/view', {
        product: product
    });
}

module.exports.updatePro = async (req, res) => {
    const imageProduct = req.file ? req.file.originalname : req.body.oldImage;
    const {nameProduct, price, _id} = req.body;
    await Products.findOneAndUpdate({_id: _id},{nameProduct: nameProduct, 
        price: price, imageProduct: imageProduct});

    res.redirect('/admin/products');
}