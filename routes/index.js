const express = require('express')
const router = express.Router()
const User = require('../database/db').User

const authorize = require('../authentication/passport').authorize

router.get( '/', authorize, (req, res, next) => {
  const { id } = req.user

  Promise.all([  User.tabs( id ), User.tasks( id ) ])
    .then( result => {
      const rows = result[ 1 ]
      const tabs = result[ 0 ].map( tab =>
        Object.assign( {}, tab, { tasks: rows.filter( row => row.tabs_id === tab.id )})
      )

      res.render('index', { user: req.user, tabs })
    })
    .catch( error =>
      res.render( 'index', { user: req.user, tabs: [], message: 'An error occurred.' })
    )
})

module.exports = router
