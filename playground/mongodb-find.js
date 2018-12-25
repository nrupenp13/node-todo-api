//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// find method
  /*
  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
console.log('Unable to fetch records');
  });
  */
  //db.close();
  // it will only show all documents with completed as false
/*
  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
console.log('Unable to fetch records');
  });
  */
  // querry using object id
  /*
  db.collection('Todos').find({_id: new ObjectID('5c2147e30968fb5513cf1d04')}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
console.log('Unable to fetch records');
  });
  */
// to find the count
  /*
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos Count = ${count}`);
  }, (err) => {
console.log('Unable to fetch records');
  });
*/
  db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
console.log('Unable to fetch records');
  });
});
