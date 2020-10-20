// const control = require('../controllers/controltrack.controller.js')
const binctrl = require('./mback/controllers/bintrack.controller')
const conctrl = require('./mback/controllers/controltrack.controller')
// const { options } = require('./mback/mqtt/config/mqttconfig')

// Mqtt --------------------------------------------------------------
const mqtts = require('./mback/mqtt/config/mqttconfig')
// const mqtt = require('mqtt')

// var mqtt = mqtts.mqtt
// var options = mqtts.options
var client = mqtts.connecting
var env = mqtts.envs


// Energia = Potência x Tempo
// 103 kWh = Potência x 720 h
// 103 kWh/720 h = Potência
// Potência = 0,143 kW ou 143 W


// var client = mqtt.connect(, options);


client.on('connect', function () {
    client.subscribe(env.Topic, function () {
        // Quando a messagem chegar, esse função sera executada. 
        client.on('message', function (topic, message, packet) {
            var message_str = JSON.parse(message)
            console.log('Imprimindo do APP ->' ,message_str)
            // data = message_str.DATA
            // console.log(data)
            // conctrl.InsertsMqtt(message)
            binctrl.InsertsMqtt(message_str)

            // console.log("Received '" + message + "' on '" + topic + "'");
        });
    });
})

