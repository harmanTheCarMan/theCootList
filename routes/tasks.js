const express = require('express')
const router = express.Router()
const Task = require('../database/db').Task
const Tab = require('../database/db').Tab
const authorize = require('../authentication/passport').authorize

router.get('/create', authorize, (req, res, next) => {
  Tab.all(req.user.id).then( result =>
  res.render('create', { title: 'New task', tabs: result }))
})


router.post('/create', authorize, (req, res, next) => {
  let description = req.body.description
  let tab_id = req.body.tab_id
  let taskData = {description: description, tab_id: tab_id}
  console.log('desc', description, 'tab', tab_id)
  Task.create( taskData )
    .then( result => response.redirect( '/' )
    .catch( error =>
      res.redirect( '/', { user: req.user, tabs: [], message: 'An error occurred.' })
    ))
})


router.post('/delete/:id', authorize, (req, res, next) => {
  res.redirect('/', { title: 'Delete' })
})

module.exports = router
