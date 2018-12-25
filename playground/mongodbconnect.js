//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring
/*
var user= {name:'Andrew', age:25};
var {name} = user; // user.name something like this and store it in name
*/
/*
var obj = new ObjectID();
console.log(obj);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// insert one in Todos db
  /*
  db.collection('Todos').insertOne({
  text: 'Something To do',
  completed: false
  }, (err, result)=>{
   if(err){
     return console.log('Unable to insert Todo', err);
   }
   console.log(JSON.stringify(result.ops, undefined, 2));
  });
*/




  // Insert new doc into Users (name, age, location)

  db.collection('Users').insertOne({
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
