var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all posts test */
router.get('/weblinks', function(req, res, next) {
  var testArrOfPosts = ['Post 1', 'Post 2', 'Post 3'];
  res.send(testArrOfPosts);
});

module.exports = router;
