const MongoClient = require('mongodb').MongoClient
const { MONGO_URL, MONGO_DB_NAME } = require('../config/db.config')

const state = {
  db: null,
}

// MongoClient Connection Method
exports.connect = (done) => {
  if (state.db) return done()

  MongoClient.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return done(err)

    // Set Database Name
    let dbName = MONGO_DB_NAME;

    // Store Database to state.db variable so we can return that variable with get() method.
    state.db = client.db(dbName);
    done()
  })
}

// Return Database Obj
exports.getInstance = () => {
  return state.db;
}

// Close the connection
exports.close = (done) => {
  if (state.db) {
    state.db.close((err, result) => {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}

