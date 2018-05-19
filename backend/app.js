var express = require('express');
var app = express();
var mongodb = require('mongodb');
//var mongoose = require('mongoose');
var mongodbClient = mongodb.MongoClient;
var databaseUrl = process.env.MONGO_DATABASE || "mongodb://localhost/iot_test"
//var databaseUrl = "mongodb://localhost/iot_test"
//var Image = require('./models').Image;
//var SoilHumidty = require('./models').SoilHumidty;

//mongoose.connect(databaseUrl);

mongodbClient.connect(databaseUrl, (err, mongoClient) => {
    if(err) throw err;
    const db = mongoClient.db("iot_test");
    collection = db.collection("SoilHumidty");
});

app.get('/api/sensor', (req, res) => {
    collection.find().toArray((error, documents) => {
      if (error) {
        res.send(error)
        return
      }
      res.json(documents)
    })
  /*
  SoilHumidty.find().exec((err, datas) => {
    if (err) {
      res.send(err)
      return
    }
    res.json(datas)
  })*/
})

app.get('/api/image', (req, res) => {
  res.json('ok') 
});

app.post('/api/image', (req, res) => {
  //Image.create(JSON.parse(req.body), function (err, data) {
    //if (err) throw new Error(err);
    res.send(err);
    //res.send('{ result: "ok"}');
  //}); 
});

app.listen(3000);
