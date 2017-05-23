var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.session);
    if (req.session.username) {
        res.render('transfer', { from: req.session.username });
    } else {
        res.render('error', { message: 'not authorized' });
    }
});

router.post('/', function(req, res, next) {
    if (req.session.username) {
        res.render('transfer-completed', {
            payee: req.body.payee,
            amount: req.body.amount,
        });
    } else {
        res.render('error', { message: 'not authorized' });
    }
});

module.exports = router;
