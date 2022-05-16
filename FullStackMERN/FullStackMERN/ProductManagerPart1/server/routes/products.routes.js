const ProductController = require('../controllers/products.controller');

module.exports = (app) => {
    app.post('/api/products', ProductController.createProduct);
};