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
  type: Boolean,
  default: false
},
completedAt : {
  type: Number,
  default : null
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

// new user model
// email - required field, trim , type - string , set min length of 1
// save it in new Users collection




/*
var User = mongoose.model('User' , {
email: {
type: String, // Datatype
required: true,  // the text property is a required field
minlength :1, // the text has to have a min length
trim: true // its going to remove the white space characters
}
});

var newUser = new User({
  email: 'nrupenpatel0@gmail.com'
});

newUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save user', e);
});

*/
