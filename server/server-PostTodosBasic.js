var express = require('express');
var bodyParser = require('body-parser');



var {mongoose} = require('./DB/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=> {
    res.status(201).send(doc);
  }, (e)=>{
   res.status(400).send(e);
  });
});


// the below is the response you get for the above request
/*
{
    "__v": 0,
    "text": "This is from Postman",
    "_id": "5c22973e7e9809a543cec684",
    "completedAt": null,
    "completed": false
}
*/



// GET METHOD /todos
app.listen(3000, ()=>{

  console.log('Started on port 3000');
});
