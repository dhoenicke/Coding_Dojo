const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        minLength: [5, 'Title needs to be more than 5 characters'],
    },
    writer: {
        type: String,
        required: [true, 'Please add a writer'],
        minLength: [3, 'Title needs to be more than 3 characters'],
    },
    rating: {
        type: Number,
    },
}, {timestamps: true})

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;