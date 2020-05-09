const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Cart
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Cart
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserId: function (req, res) {
    const id  = (req.params.id)
    db.Cart
      .findOne({userId: id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    const id  = (req.params.id)
    db.Cart
      .findOneAndUpdate({ userId: id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    const id  = (req.params.id)
    db.Cart
      .findOne({ userId: id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}