const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [3, 'Length must be at least 3 characters']
    },

    book: {
        type: String,
        required: [true, 'Book is required'],
        minLength: [3, 'Length must be at least 3 characters']
    },
}, {timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;