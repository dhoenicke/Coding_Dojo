const Book = require('../models/jokes.model');

module.exports.readAll = (req, res) => {
    Book.find()
    .then((foundJokes) => {
        res.json({results: foundJokes });
    })
    .catch((err) => {
        res.json({message: 'Something went wrong', err})
    })
}
module.exports.readOne = (req, res) => {
    Book.findOne({_id:req.params.id})
    .then((foundJoke) => {
        res.json({results: foundJoke});
    })
    .catch((err) => {
        res.json({message: 'Something went wrong with your joke', err})
    })
}
module.exports.create = (req, res) => {
    Book.create(req.body)
    .then((newJoke) => {
        res.json({results: newJoke });
    })
    .catch((err) => {
        res.json({message: 'Something went wrong with your creation', err})
    })
}
module.exports.update = (req, res) => {
    Book.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then((updatedJoke) => {
        res.json({results: updatedJoke});
    })
    .catch((err) => {
        res.json({message: 'Something went wrong with your update', err})
    })
}
module.exports.delete = (req, res) => {
    Book.deleteOne({_id: req.params.id})
    .then((deletedJoke) => {
        res.json({results: deletedJoke});
    })
    .catch((err) => {
        res.json({message: 'Something went wrong with your deletion', err})
    })
}