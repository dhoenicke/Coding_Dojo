const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'Title is required'],
        minLength: [3, 'Title must be 3 or more characters'],
    },
    price: {
        type: Number,
        require: [true, 'Price is required'],
        min: [1, 'Price must be 1 or more numbers'],
    },
    description: {
        type: String,
        require: [true, 'Description is required'],
        minLength: [10, 'Description must be 10 or more charactors']
    },
}, {timestamps: true})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;