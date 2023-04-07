const { MongoClient, Decimal128} = require('mongodb')

const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/';
const database ="ttp-test"
let _db 

const connectDB = (cb) => {
  try {
    MongoClient.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true}, (err, db) => {
      if(err){throw err}
      console.log("Connected to database successfully!");

      _db = db.db(database)
      return cb(err)
    })
  } catch (err) {
    throw err
  }
}

const getDB = () => _db

const disconnectDB = () => _db.close()


module.exports = {connectDB, getDB, disconnectDB, Decimal128}




// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017';


// const connectDB = (cb) => {
// MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((client) => {
//     console.log('Connected to MongoDB!');
//     const db = client.db();
//     // Use the db object to interact with the database
//   })
//   .catch((err) => {
//     console.error('Failed to connect to MongoDB', err);
//   });
// }
// module.exports = {connectDB}