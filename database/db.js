const pgp = require('pg-promise')()
const db = pgp({database: 'tabr'})

const findById = 'SELECT email, id FROM users WHERE id=$1'

const findByEmailAndPassword = 'SELECT email, id FROM users WHERE email=$1 AND password=$2'

const createUser = 'INSERT INTO users (email, password) VALUES( $1, $2 ) RETURNING *'

const createTab =  'INSERT INTO tabs (title) VALUES ($1) RETURNING *'

const createItem = 'INSERT INTO items (description) VALUES ($1) RETURNING id'

const User = {
  create: (email, password) => {
    return db.one( createUser, [ email, password ])
  },
  find: id => {
    return db.one( findById, [id])
  },
  login: (email, password) => {
    return db.one( findByEmailAndPassword, [ email, password ])
  }
}

const Tab = {
  create: title => {
    return db.one( createTab, [title] )
  }
}

const Item = {
  create: description => {
    return db.one( createItem, [description])
  },
  //updating rank somehow
  update: (rank, tab_id) => {
    return db.any( updateRank, [ rank,tab_id ] )//what happens here?
  }
}

module.exports = {
  User, Item, Tab
}
