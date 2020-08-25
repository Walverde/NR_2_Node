// import mqtrtuyguytyut

var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://io.adafruit.com', {
    username: 'ADAFRUIT_IO_USERNAME',
    password: 'ADAFRUIT_UI_KEY'
});

var ssd1306topic = `${client.options.username}/f/ssd1306`;

client.on('connect', function() {
    console.log('connected');

    client.subscribe(ssd1306topic, function(err) {
        if(! err) {
            console.log('subscribed');

            client.publish(ssd1306topic, 'Hello from NodeJS');
        }
    });
});

client.on('message', function(topic, message) {
    console.log(message.toString());
});