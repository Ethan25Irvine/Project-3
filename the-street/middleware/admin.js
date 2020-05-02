const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';
const withAuth = function(req, res, next) {
  const token = req.cookies.admin;
  // check if a token exists
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else { 
    // verifies token and sees if it is for an admin
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
