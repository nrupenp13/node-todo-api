var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo' , {
text: {
type: String, // Datatype
required: true,  // the text property is a required field
minlength :1, // the text has to have a min length
trim: true // its going to remove the white space characters
},
completed: {
  type: Boolean
},
completedAt : {
  type: Number
}
});

var newTodo = new Todo({
  text: 'Edit this video     '
});

newTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save', e);
});


// the below code will give me this error

/*
{ text:
      { ValidatorError: Path `text` is required.

*/
