var mqtt = require('mqtt');
var mongodb = require('mongodb');
var mongodbClient = mongodb.MongoClient;
var databaseURI = process.env.MONGO_DATABASE || "mongodb://localhost/myapp"
var collection;

mongodbClient.connect(databaseURI, (err, mongoClient) => {
    if(err) throw err;
    const db = mongoClient.db("iot");
    collection = db.collection("raspberryPi");
});

var client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    clientId: 'mqtt.subscriber',
});

client.on('connect', () => {
    console.log('subscriber.connected.');
});

client.subscribe('raspberryPi', (err, granted) => {
    console.log('subscriber.subscribed.');
});

client.on('message', (topic, message) => {
    console.log('subscriber.on.message', 'topic:', topic, 'message:', message);
    
    collection.update(
      { _id: topic },
      { $push: { datas: { data: { value: message, date: new Date() }}}},
      { upsert: true},
      (err, docs) => {
        if(err) { console.log("Insert fail"); }
      }
    )
});

