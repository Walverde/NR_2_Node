let mqtt = require('mqtt')
let client = mqtt.connect('mqtt:192.168.0.31:1883')
let topic = "test"

// let message = "1"


client.on('connect',()=>{
    client.subscribe(topic)
})

client.on('message', (topic, message) => {
    message = message.toString()
    console.log(message)
})

