const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';
const withAuth = function(req, res, next) {
  const token = req.cookies.user;
  // Checks if token exists
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    // Checks if token is equal to user
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
}
module.exports = withAuth;