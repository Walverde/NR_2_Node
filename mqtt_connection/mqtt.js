const mqtt = require('mqtt')
const localhost = '192.168.100.6'
const client  = mqtt.connect(localhost) // host, pode ser o ip tbm: ex: '192.168.0.31'


client.on('connect', function () {
    client.subscribe('node', function (err) {
      if (!err) {
        client.publish('node', 'Hello mqtt')
      }
    })
  })

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
  })  