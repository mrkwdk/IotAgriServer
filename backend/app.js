var express = require('express');
var app = express();
var mongoose = require('mongoose');
var databaseUrl = process.env.MONGO_DATABASE || "mongodb://localhost/myapp"
var Todo = require('./models').Todo;
var Image = require('./models').Image;

mongoose.connect(databaseUrl);

app.get('/api/todos', function(req, res) {
  Todo.find().exec((err, todos) => {
    if (err) {
      res.send(err)
      return
    }   
    res.json(todos)
  })  
});

app.get('/api/image', function(req, res) {
  res.json('ok') 
});

app.post('/api/image', function(req, res) {
  Image.create(JSON.parse(req.body), function (err, data) {
    //if (err) throw new Error(err);
    res.send(err);
    //res.send('{ result: "ok"}');
  }); 
});

app.listen(3000);
