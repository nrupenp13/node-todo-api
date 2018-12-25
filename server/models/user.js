var mongoose = require('mongoose');


var User = mongoose.model('User' , {
email: {
type: String, // Datatype
required: true,  // the text property is a required field
minlength :1, // the text has to have a min length
trim: true // its going to remove the white space characters
}
});


module.exports = {User};
