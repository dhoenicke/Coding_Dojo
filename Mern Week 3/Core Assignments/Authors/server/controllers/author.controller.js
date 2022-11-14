const response = require('express');
const Author = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then((newAuthor) => {res.json({results: newAuthor})})
    .catch(err => res.json({err:err}))
};
module.exports.getAllAuthors = (req, res) => {
    Author.find()
    .then((allAuthors) => {res.json({results: allAuthors})})
    .catch(err => res.json({err:err}))
};
module.exports.getAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
    .then((author) => {res.json({results: author})})
    .catch(err => res.json({err:err}))
};
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new: true})
    .then((updatedAuthor) => {res.json({results: updatedAuthor})})
    .catch(err => res.json({err:err}))
};
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
    .then((deleteAuthor) => {res.json({results: deleteAuthor})})
    .catch(err => res.json({err:err}))
};