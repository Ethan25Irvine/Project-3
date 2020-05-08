const express = require('express');
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
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://the-street:AZBOBA2020@ds137256.mlab.com:37256/heroku_778n0g3n');

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
