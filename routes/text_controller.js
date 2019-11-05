var express = require('express');
var router = express.Router();

/* GET home page. twitの入力画面表示*/
router.get('/text', function(req, res, next) {
    res.render('text/text.html'); 
});

module.exports = router;