const {mongoose} = require('./../server/DB/mongoose');
const {Todo} = require('./../server/models/todo');
const {MongoClient, ObjectID} = require('mongodb');

Todo.remove({}).then(function(result){
  console.log(result);
});


Todo.findOneAndRemove({_id : '5c230a22cba012295ed5dffd'}).then((todo)=> {
  console.log(todo);
});
