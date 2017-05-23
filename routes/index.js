var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  if (req.session.username) {
    res.redirect('/transfer');
  } else {
    res.render('index', { title: 'Hi, Login' });
  }
});

module.exports = router;
