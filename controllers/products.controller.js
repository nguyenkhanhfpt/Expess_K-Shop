const Products = require("../models/products.model");

module.exports.index = async (req, res) => {
  const products = await Products.find();
  res.render("./products", {
    products: products,
  });
};

module.exports.viewOnePro = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findOne({_id: id});
  res.render('./products/view', {
    product: product
  });
};
