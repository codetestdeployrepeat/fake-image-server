var express = require('express');
var router = express.Router();
var faker = require('faker');

/* GET home page. */
router.get('/', function(req, res, next) {
  const url = faker.image.image();
  const data = {
    url
  };
  res.send(data);
});

router.post('/', function(req, res, next) {
  const url = faker.image.image();
  const data = {
    url
  };
  res.send(data);
});

module.exports = router;
