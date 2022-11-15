const PirateModel = require('../models/pirate.model');

    module.exports.findAllPirates = (req, res) => {
        PirateModel.find()
            .then((allPirates) => res.json(allPirates))
            .catch(err => res.status(400).json(err));
    }

    module.exports.findPirateById = (req, res) => {
        PirateModel.findById({ _id: req.params.id })
            .then((oneSinglePirate) => res.json(oneSinglePirate))
            .catch(err => res.status(400).json(err));
    }

    module.exports.createNewPirate = (req, res) => {
        PirateModel.create(req.body)
            .then((newPirate) => res.json(newPirate))
            .catch(err => res.status(400).json(err));
    }

    module.exports.updatePirateById = (req, res) => {
        PirateModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((updatedPirate) => res.json(updatedPirate))
            .catch(err => res.status(400).json(err));
    }

    module.exports.deletePirateById = (req, res) => {
        PirateModel.findByIdAndDelete({ _id: req.params.id })
            .then((deletedAuthor) => res.json(deletedAuthor))
            .catch(err => res.status(400).json(err));
    }