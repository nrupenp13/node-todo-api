var mongoose = require('mongoose');

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



module.exports = {Todo};
