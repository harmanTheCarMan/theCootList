const express = require('express')
const router = express.Router()
const Task = require('../database/db').Task

const authorize = require('../authentication/passport').authorize

router.post( '/', authorize, (request, response) => {
  //Need to change tab_id to correspond to current tab so that tasks can be added for that specific tab instead of only for the default user id only... not sure how to implement
  const tab_id = request.user.id
  console.log(tab_id);
  const description = request.body[ 'new-task' ]

  Task.create( tab_id, description )
    .then( result => response.redirect( '/' ))
})


module.exports = router
