var express = require('express');
var router = express.Router();

var testArrOfPosts = [{text:'Post 1'}, {text:'Post 2'}, {text:'Post 3'}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weblinks', function(req, res, next) {
  res.send(testArrOfPosts);
});

router.post('/weblinks', function(req, res, next) {
  testArrOfPosts.push(req.body);
  res.send(req.body);
})

router.delete('/weblinks/:index', function(req, res, next) {
  testArrOfPosts.splice(req.params.index, 1);
  res.send(req.params.index);
})

router.put('/weblinks/:index', function(req, res, next) {
  testArrOfPosts.splice(req.params.index, 1, req.body);
  res.send(testArrOfPosts);
})

module.exports = router;
