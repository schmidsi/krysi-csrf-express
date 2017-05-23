var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  if (req.body.username === 'alice' && req.body.password === 'password') {
    req.session.username = req.body.username;
    res.redirect('/');
  } else {
    res.render('error', { message: `No user ${req.body.username}. Try "alice:password"` });
  }
});

module.exports = router;
