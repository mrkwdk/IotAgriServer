var mqtt = require('mqtt');
var client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    clientId: 'mqtt.subscriber',
});

client.on('connect', function(){
    console.log('subscriber.connected.');
});

client.subscribe('SoilHumidity', function(err, granted){
    console.log('subscriber.subscribed.');
});

client.subscribe('Illumination', function(err, granted){
    console.log('subscriber.subscribed.');
});

client.on('message', function(topic, message){
    console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());
});

