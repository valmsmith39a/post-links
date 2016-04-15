var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all posts test */
router.get('/weblinks', function(req, res, next) {
  res.send('GET all posts TEST: You got a bunch of posts');
});

module.exports = router;
