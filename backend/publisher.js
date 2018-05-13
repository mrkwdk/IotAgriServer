var mqtt = require('mqtt');
var client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    clientId: 'mqtt.publisher',
});

client.on('connect', function(){
    console.log('publisher.connected.');
});

setInterval(function(){
    var message = Date.now().toString()/
    client.publish('SoilHumidity', message);
    client.publish('Illumination', message);
    console.log('publisher.publish:', message);
}, 1000);
