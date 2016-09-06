const pgp = require('pg-promise')()
const db = pgp({
  database: 'tabr',
})

const findById = 'SELECT email, id FROM users WHERE id=$1'

const findByEmailAndPassword = 'SELECT email, id FROM users WHERE email=$1 AND password=$2'

const createUser = 'INSERT INTO users (email, password) VALUES( $1, $2 ) RETURNING *'

const User = {
  create: (email, password) => {
    return db.one( createUser, [ email, password ])
  },
  find: id => {
    return db.one( findById, [id])
  }
  login: (email, password) => {
    return db.any( findByEmailAndPassword, [ email, password ])
  }
}

module.exports = {
  User, getUser, createUser
}
