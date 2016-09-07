var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* Register new user. */
router.get('/register', (req, res, next) => {
  res.render('register');
});

/* Log in user. */
router.get('/login', (req, res, next) => {
  res.render('login');
});

module.exports = router;
