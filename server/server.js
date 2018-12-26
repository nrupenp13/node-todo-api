// https://guarded-beyond-70962.herokuapp.com/todos

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

var {mongoose} = require('./DB/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var {ObjectID} = require('mongodb');

var app = express();

const port = process.env.PORT || 3000 ;

app.use(bodyParser.json());

// Creat todo
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET ALL todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/<id>
app.get('/todos/:id', function(req, res){
  var id = req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(400).send();
  }
  else
  {
    Todo.findById(id).then(function(todo){
      if(!todo){
        res.status(404).send();
      }
      else {
        res.send({todo});
      }
    }).catch(function(e){
      res.send(400).send();
    });
  }
});

// DELETE by id
app.delete('/todos/:id', function(req, res){
  var id = req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(400).send();
  }
  Todo.findByIdAndRemove(id).then((todo)=> {
    if(!todo){
      res.status(404).send()
    }
    else
    {
      res.send(todo);
    }
  }).catch((e)=>{
    res.status(400).send();
  });
});


// UPDATE

app.patch('/todos/:id', (req, res)=> {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);
  if(!ObjectID.isValid(id))
  {
    return res.status(400).send();
  }
  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();

  }
  else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new:true}).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send(e);
  });
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
