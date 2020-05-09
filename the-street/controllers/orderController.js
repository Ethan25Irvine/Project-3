const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Order
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findAll: function (req, res) {
        db.Order
          .find(req.query).sort({timestamp: -1})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}