const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../database/db').User

const authenticationFields = {
  usernameField: 'email'
}

const strategy = ( email, password, done ) => {
  User.login( email, password )
    .then( user => done( null, user[ 0 ] ))
    .catch( error => done( null, false, { message: 'User not found.' } ))
}

passport.use( new LocalStrategy( authenticationFields, strategy ) )

passport.serializeUser( (user, done) => done( null, user.id ))

passport.deserializeUser( (id, done) => {
  User.find( id )
    .then( user => done( null, user[ 0 ] ))
    .catch( error => done( error, null ))
})

const authorize = (request, response, next) => {
  if( request.isAuthenticated() ) {
    return next()
  } else {
    response.redirect( '/users/login' )
  }
}

module.exports = { passport, authorize }
