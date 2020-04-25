const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.Users
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    const {email} = (req.params.email)
    db.Users
      .find(email)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    const {email} = (req.params.email)
    db.Users
      .findOneAndUpdate({ email: email}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    const {email} = (req.params.email)
    db.Users
      .findById({ email: email})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};