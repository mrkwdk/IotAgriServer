var mqtt = require('mqtt');
var client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    clientId: 'mqtt.publisher',
});

client.on('connect', () => {
    console.log('publisher.connected.');
});

setInterval(() => {
    var message = "1";
    client.publish('SoilHumidty', message);
    console.log('publisher.publish:', message);
}, 1000);
