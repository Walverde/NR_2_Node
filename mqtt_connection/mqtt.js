const mqtt = require('mqtt')
const client  = mqtt.connect('localhost') // host, pode ser o ip tbm: ex: '192.168.0.31'


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