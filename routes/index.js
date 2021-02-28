var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const headers = JSON.stringify(req.headers)
  res.render('index', { title: 'Express', headers });
});

module.exports = router;
