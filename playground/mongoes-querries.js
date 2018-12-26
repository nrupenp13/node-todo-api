const {mongoose} = require('./../server/DB/mongoose');
const {Todo} = require('./../server/models/todo');
const {MongoClient, ObjectID} = require('mongodb');

var id = '5c22bc500e96590d0b761402';
if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

Todo.find({

_id : id
}).then((todos) => {
  console.log('Todos', todos);
});


Todo.findOne({

_id : id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo bY Id ', todo);
}).catch((e)=>{
  console.log(e);
});
