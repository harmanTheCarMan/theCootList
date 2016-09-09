const express = require('express')
const router = express.Router()
const Task = require('../database/db').Task

const authorize = require('../authentication/passport').authorize

router.post( '/', authorize, (request, response) => {
  const tab_id = request.body[ 'tab-id' ]
  const description = request.body[ 'new-task' ]

  Task.create( tab_id, description )
    .then( result => response.redirect( '/' ))
})


module.exports = router
