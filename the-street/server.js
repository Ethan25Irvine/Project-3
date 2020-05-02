const express = require('express');
<<<<<<< HEAD
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { sendEmail } = require('./mail');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/sendMail', (req, res) => {
	console.log(req.body);

	// sendEmail(req.body.email, req.body.name, 'hello');
});

app.listen(5000, () => {
	console.log('server Running at 5000');
=======
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');
const withAuthAdmin = require('./middleware/admin');
const withAuthUser = require('./middleware/user');

app.use(cookieParser());

app.get('/isAdmin', withAuthAdmin, function(req, res) {
  res.sendStatus(200);
});

app.get('/isUser', withAuthUser, function(req, res) {
  res.sendStatus(200);
});

const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/theStreet");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
>>>>>>> c7cec01574c1fa244aab35973b68837deedbab7e
});
