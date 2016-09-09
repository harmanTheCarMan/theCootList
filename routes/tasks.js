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

router.post( '/update', authorize, (request, response) => {
  const { id, value } = request.body

  Task.update( id, value )
    .then( result => response.redirect( '/' ))
    .catch( error => console.log( error ))
})

router.post( '/completeTask', authorize, (request, response) => {
  const task_id = request.body[ 'id' ]

  Task.completeTask( task_id )
    .then( result => response.redirect( '/' ))
    .catch( error => console.log( error ))
})

router.post( '/uncompleteTask', authorize, (request, response) => {
  const task_id = request.body[ 'id' ]

  Task.uncompleteTask( task_id )
    .then( result => response.redirect( '/' ))
    .catch( error => console.log( error ))})

router.post( '/up', authorize, (request, response) => {
  const rank = parseInt( request.body.rank )
  const id = request.body.id
  const tab_id = request.body[ 'tab-id' ]

  Task.moveDown( tab_id, rank )
    .then( result => Task.setRank( id, rank - 1 ))
    .then( result => response.redirect( '/' ))
})

router.post( '/down', authorize, (request, response) => {
  const rank = parseInt( request.body.rank )
  const id = request.body.id
  const tab_id = request.body[ 'tab-id' ]

  Task.moveUp( tab_id, rank )
    .then( result => Task.setRank( id, rank + 1 ))
    .then( result => response.redirect( '/' ))
})

router.post( '/delete/', authorize, (request, response) => {
  Task.delete( request.body.id )
    .then( result => response.redirect( '/' ))
    .catch( error => console.log( error ))
})

module.exports = router
