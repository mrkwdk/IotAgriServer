var mqtt = require('mqtt');
var mongodb = require('mongodb');
//var mongoose = require('mongoose');
var mongodbClient = mongodb.MongoClient;
var databaseURI = process.env.MONGO_DATABASE || "mongodb://localhost/iot_test";
//var SoilHumidty = require('./models').SoilHumidty;
var collection;

//mongoose.connect(databaseURI);

mongodbClient.connect(databaseURI, (err, mongoClient) => {
    if(err) throw err;
    const db = mongoClient.db("iot_test");
    collection = db.collection("SoilHumidty");
});

var client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    clientId: 'mqtt.subscriber',
});

client.on('connect', () => {
    console.log('subscriber.connected.');
});

client.subscribe('SoilHumidty', (err, granted) => {
    console.log('subscriber.subscribed.');
});

client.on('message', (topic, message) => {
    console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());
    /*
    var data = new SoilHumidty({
      data: message,
      date: new Date(),
    });

    data.save((err) => {
      if (err) throw err;
    })
    */
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth();
    var date = new Date();

    format_str = 'YYYY-MM-DD hh:mm:ss';
    format_str = format_str.replace(/YYYY/g, date.getFullYear());
    format_str = format_str.replace(/MM/g, date.getMonth());
    format_str = format_str.replace(/DD/g, date.getDate());
    format_str = format_str.replace(/hh/g, date.getHours());
    format_str = format_str.replace(/mm/g, date.getMinutes());
    format_str = format_str.replace(/ss/g, date.getSeconds());
    collection.insert(
      { value: parseInt(message), date: format_str },
    )
});

