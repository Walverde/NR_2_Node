// import mqtrtuyguytyut

var mqtt = require('mqtt');

var client = mqtt.connect('192.168.0.31') // Host
// , {
    // username: 'ADAFRUIT_IO_USERNAME',
    // password: 'ADAFRUIT_UI_KEY'
// });

// var ssd1306topic = `${client.options.username}/f/ssd1306`;

// client.on('connect', function() {
//     console.log('connected');

//     client.subscribe(ssd1306topic, function(err) {
//         if(! err) {
//             console.log('subscribed');

//             client.publish(ssd1306topic, 'Hello from NodeJS');
//         }
//     });
// });

client.on('connect', function () {
    client.subscribe('presence', function (err) {
      if (!err) {
        client.publish('presence', 'Hello mqtt')
      }
    })
  })

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
  })

// client.on('message', function(topic, message) {
//     console.log(message.toString());
// });