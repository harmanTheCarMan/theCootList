const pgp = require('pg-promise')()
const db = pgp({database: 'tabr'})

const findById = 'SELECT email, id FROM users WHERE id=$1'

const findByEmailAndPassword = 'SELECT email, id FROM users WHERE email=$1 AND password=$2'

const createUser = 'INSERT INTO users (email, password) VALUES( $1, $2 ) RETURNING *'

const createTab =  'INSERT INTO tabs (title, user_id) VALUES ($1, $2) RETURNING *'

const createTask = 'INSERT INTO tasks (description, tab_id) VALUES ($1, $2) RETURNING *'

const allTasks = 'SELECT t.id as tabs_id, t.title, i.*  FROM tabs t JOIN tasks i ON i.tab_id=t.id WHERE t.user_id=$1'

<<<<<<< a74782bd0ea65291457788f0e17778e633a0dc38
=======
const allItems = 'SELECT t.id as tabs_id, t.title, i.*  FROM tabs t JOIN items i ON i.tab_id=t.id WHERE t.user_id=$1'

>>>>>>> x
const allTabsForUser = 'SELECT * from tabs WHERE user_id=$1'

const getTabsByUserId = 'SELECT * FROM tabs WHERE user_id=$1'

const getItemsByTabId = 'SELECT * FROM items WHERE tab_id=$1'

const deleteTab = 'DELETE * FROM tabs where id=$1'

const deleteItem = 'DELETE * FROM items where id=$1'

const User = {
  create: (email, password) => {
    return db.one( createUser, [ email, password ])
  },
  find: id => db.any( findById, [id]),
  login: (email, password) => {
    return db.any( findByEmailAndPassword, [ email, password ])
  },
  tabs: id => Tab.all( id ),
  tasks: id => db.any( allTasks, [id] )
}

const Tab = {
  create: (id, title) => {
    return db.one( createTab, [title, id] )
  },
  all: id => db.any( allTabsForUser, [id] ),

  display: userId => {
    return db.any( getTabsByUserId, [userId] )
  },

  delete: id => {
    return db.none( deleteTab, [id] )
  }
}

const Task = {
  create: (tab_id, description) => {
    return db.one( createTask, [description, tab_id])
  },
  //updating rank somehow
  update: (rank, tab_id) => {
    return db.any( updateRank, [ rank,tab_id ] )//what happens here?
  },
  display: tab_id => {
    return db.any(getItemsByTabId, [tab_id] )
  },
  delete: id => {
    return db.none( deleteItem, [id] )
  }
}

module.exports = {
  User, Task, Tab
}
