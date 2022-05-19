const Product  = require('../models/products.model');

/**
 * Retrieves all products from the database.
 * 
 * @param {Request} req The client request object.
 * @param {Response} res The server response object containing all products
 *   or an error object.
 */
module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => res.json({ products: allProducts }))
        .catch((err) => res.json({
            message: 'Unable to retrieve products',
            error: err
        }));
};

/**
 * Retrieves the product from the database with an ID matching that in the
 * req.params object.
 * 
 * @param {Request} req The client request object.
 * @param {Response} res The server response object containing this product or
 *   an error object.
 */
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

/**
 * Creates a new product in the database with the data from the req.body object.
 * 
 * @param {Request} req The client request object containing the form body.
 * @param {Response} res The server response object containing the new product
 *   or an error status object if validation errors.
 */
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => res.status(400).json(err));
};

/**
 * Finds a product in the database with an ID matching the ID from req.params,
 * and updates it with the data from the form in req.body.
 * 
 * @param {Request} req The client request object containing the form body.
 * @param {Response} res The server response object containing the updated
 *   product or an error status object if validation errors.
 */
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((updatedProduct) => res.json({ product: updatedProduct }))
        .catch((err) => res.status(400).json(err));
}

/**
 * Finds a product in the database with an ID that matches that in req.params
 * and removes it from the database.
 * 
 * @param {Request} req The client request object with the product ID.
 * @param {Response} res The server response object containing the result of
 *   the delete or an error object.
 */
module.exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id })
        .then((result) => res.json(result))
        .catch((err) => res.json({
            message: `Unable to delete product (ID: ${ req.params.id })`,
            error: err
        }));
}
