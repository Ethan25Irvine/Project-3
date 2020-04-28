const db = require("../models");
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';


// Defining methods for the UsersController
module.exports = {

  login: function (req, res) {
    const { email, password } = req.body;
    db.Users.findOne({ email }, function (err, user) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
            error: 'Internal error please try again'
          });
      } else if (!user) {
        res.status(401)
          .json({
            error: 'Incorrect email'
          });
      } else {
        user.isCorrectPassword(password, function (err, same) {
          if (err) {
            res.status(500)
              .json({
                error: 'Internal error please try again'
              });
          } else if (!same) {
            res.status(401)
              .json({
                error: 'Incorrect password'
              });
          } else if (user.isAdmin === true) {
            // Issue token
            console.log("signed in " + email)
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: 60
            });
            res.cookie('admin', token)
              .sendStatus(200)
              // .json({
              //   isAdmin: true
              // }); 
          } else {
            console.log("signed in " + email)
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: 60
            });
            res.cookie('user', token)
              .sendStatus(200)
              // .json({
              //   isAdmin: false
              // });              
          }
        });
      }
    });
  },



  findAll: function (req, res) {
    db.Users
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function (req, res) {
    const email  = (req.params.email)
    db.Users
      .findOne({email: email})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    const { email } = (req.params.email)
    db.Users
      .findOneAndUpdate({ email: email }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    const { email } = (req.params.email)
    db.Users
      .findById({ email: email })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};