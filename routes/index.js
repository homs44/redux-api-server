var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const data = {
    name: 'jack',
    age: 20,
    address:'secret'
  }

  res.json(data);

});

module.exports = router;
