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


// update
/*
db.collection('Todos').findOneAndUpdate(
  {_id : new ObjectID('5c21d302cba012295ed59014')},
  {$set:{
    completed : true,
  }},
  {returnOriginal : false}
).then((result)=>{
  console.log(result);
});

*/

// update name in user document - and age gets incremented by 1
db.collection('Users').findOneAndUpdate(
  {_id : new ObjectID('5c214a46267ee05d777c600f')},
  {
    $set:{
    name : 'Nrupen Patel',
  },
    $inc:{
    age : 1,
  }
  },
  {
    returnOriginal : false
  }
).then((result)=>{
  console.log(result);
});

});
