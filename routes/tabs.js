const express = require('express')
const router = express.Router()
const Tab = require('../database/db').Tab

const authorize = require('../authentication/passport').authorize

router.post( '/', authorize, (request, response) => {
  const id = request.user.id
  const title = request.body[ 'new-tab' ]

  Tab.create( id, title )
    .then( result => response.redirect( '/' ))
})

router.post( '/delete', authorize, (request, response) => {
  Tab.delete( request.body.id )
  .then( result => response.redirect( '/' ))
  .catch( error => console.log( error ))
})

module.exports = router
