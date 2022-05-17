const Product  = require('../models/products.model');

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => res.json({ products: allProducts }))
        .catch((err) => res.json({
            message: 'Unable to retrieve products',
            error: err
        }));
};

module.exports.getProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((dbProduct) => res.json({ product: dbProduct }))
        .catch((err) => {
            res.json({
                message: 'Unable to retrieve product',
                error: err
            });
        })
};

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => res.json({
            message: 'Unable to create product',
            error: err
        }));
};
