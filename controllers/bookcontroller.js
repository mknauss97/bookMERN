const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Book
        .find(req.query)
        .sort({date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Book
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Book
        .update({_id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    delete: function(req, res) {
        db.Book
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.delete())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.statue(422).json(err));
    }
};