const Author = require('../models/authors.model');

module.exports = {
    findAll: (req, res) => {
        Author.find()
            .then((dbAuthors) => res.json({ authors: dbAuthors }))
            .catch((err) => res.json(err));
    },

    getOne: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then((dbAuthor) => res.json({ author: dbAuthor }))
            .catch((err) => res.json(err));
    },

    create: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => res.json(newAuthor))
            .catch((err) => res.status(400).json(err));
    },

    update: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true, runValidators: true
        })
            .then((updatedAuthor) => res.json(updatedAuthor))
            .catch((err) => res.status(400).json(err));
    },

    delete: (req, res) => {
        Author.findOneAndDelete({ _id: req.params.id })
            .then((result) => result.json(result))
            .catch((err) => res.json(err));
    }
}