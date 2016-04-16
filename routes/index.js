var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weblinks', function(req, res, next) {
  var testArrOfPosts = [{text:'Post 1'}, {text:'Post 2'}, {text:'Post 3'}];
  res.send(testArrOfPosts);
});

router.post('/weblinks', function(req, res, next) {
  res.send(req.body);
})

router.delete('/weblinks', function(req, res, next) {
  console.log('in delete route');
  res.send('Post Deleted');
})

module.exports = router;
