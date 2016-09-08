const express = require('express')
const router = express.Router()
const Item = require('../database/db').Item

const authorize = require('../authentication/passport').authorize

router.get('/create', authorize, (req, res, next) => {
  res.render('create', { title: 'New Item' })
})

router.post('/create', authorize, (req, res, next) => {
  Item.create(req.body.description)
    .then(
      res.redirect('/')
    )
})

router.get('/update/:id', authorize, (req, res, next) => {
  res.render('update', { title: 'Update' })
})

router.post('/update/:id', authorize, (req, res, next) => {
  res.redirect('/', { title: 'Update' })
})

module.exports = router
