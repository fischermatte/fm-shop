var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const headers = JSON.stringify(req.headers)
  const principal = req.headers["x-ms-client-principal-name"]
  res.render('index', { title: 'Express', headers, principal });
});

module.exports = router;
