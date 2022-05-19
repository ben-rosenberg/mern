const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, 'Title field must not be empty']
    },
    price: {
        type: Number,
        required: [ true, 'Price field must not be empty' ],
        min: [ 0.01, 'Price must be at least $0.01' ],
    },
    description: {
        type: String,
        required: [ true, 'Description field must not be empty']
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;