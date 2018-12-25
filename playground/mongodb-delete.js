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

var deletionCriteria = [{

  _id: new ObjectID('5c21c3becba012295ed58a31')
}];

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// delete many
/*
db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=> {
console.log(result);

});
*/

// delete one sane as the above but it only deletes the first one




// Something To do
// {$and:[{"by":"tutorials point"},{"title": "MongoDB Overview"}]}
/*
var deletionCriteria = [{

  text: 'Something To do',
  completed : false
}];
*/
// find one and delete - returns the  object which we have deleted
/*
db.collection('Todos').findOneAndDelete({$and: deletionCriteria}).then((result)=> {
  console.log(result);
});

*/


db.collection('Todos').findOneAndDelete({_id: new ObjectID('5c21c3becba012295ed58a31')}).then((result)=> {
  console.log(result);
//db.close();
});
});
