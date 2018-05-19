var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    status: 'oke',
    data: [],
    messages: 'enpoint api for hacktiv-overflow app'
  });
});

module.exports = router;
