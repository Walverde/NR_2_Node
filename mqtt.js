let mqtt = require('mqtt')
let client = mqtt.connect('mqtt:192.168.0.31:1883')

console.log("Conexão",client.connected)

let topic = "test"
let message = "1"

client.on('connect',()=>{
    setInterval(()=>{
        client.publish(topic,message)
        console.log('messagem enviada',message)
    }, 1000 )
})