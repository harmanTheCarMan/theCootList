const express = require('express')
const router = express.Router()

const authorize = require('../authentication/passport').authorize

/* GET home page. */
router.get('/', authorize, (req, res, next) => {
  if (req.session.passport.user) {
    res.render('index', { title: 'TABR' })
  }
  else res.redirect('/users/login')
})

module.exports = router
