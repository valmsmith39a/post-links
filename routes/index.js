var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET TEST  */
router.get('/weblinks', function(req, res, next) {
  var testArrOfPosts = [{text:'Post1'}, {text:'Post 2'}, {text:'Post 3'}];
  res.send(testArrOfPosts);
});

/* POST TEST */
router.post('/weblinks', function(req, res, next) {
  res.send(req.body);
})

module.exports = router;
