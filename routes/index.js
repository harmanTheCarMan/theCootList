var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TABR' });
});

router.get('/create', function(req, res, next) {
  res.render('create_task', { title: 'New Task' });
});

router.post('/create', function(req, res, next) {
  res.redirect('/', { title: 'New Task' });
});

router.get('/update/:id', function(req, res, next) {
  res.render('update_task', { title: 'Update' });
});

router.post('/update/:id', function(req, res, next) {
  res.redirect('/', { title: 'Update' });
});

module.exports = router;
