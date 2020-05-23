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