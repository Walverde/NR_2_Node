// Databases ---------------------------------------------------------
const binctrl = require('./back/controllers/bintrack.controller')
// const conctrl = require('./mback/controllers/ctrl.controller')
const mconctrl = require('./back/controllers/+ctrl.controller')

//Cor-----------------------------------------------------------------
const cor = require('./back/settings/cores')

// Mqtt --------------------------------------------------------------
const mqtts = require('./back/mqtt/config/mqttconfig')

// const mqtt = require('mqtt')
// var mqtt = mqtts.mqtt
// var options = mqtts.options

const cav = require('./cav')

const clientbin = mqtts.connecting
const clientcon = mqtts.connecting
const env = mqtts.envs

// Energia = Potência x Tempo
// 103 kWh = Potência x 720 h
// 103 kWh/720 h = Potência
// Potência = 0,143 kW ou 143 W
// var client = mqtt.connect(, options);


// clientbin.on('connect', function () {
//     clientbin.subscribe(env.Topic, function () {
//         // Quando a messagem chegar, esse função sera executada. 
//         clientbin.on('message', function (topic, message, packet) {
//             var message_str = JSON.parse(message)
//             // console.log('Imprimindo do APP ->' ,message_str)
//             // data = message_str.DATA
//             // console.log(data)
//             console.log(`${cor.FgGreen}BinCtrl${cor.Reset}`)
//             binctrl.InsertsMqtt(message_str)
//             // console.log(`${cor.FgRed}ConCtrl${cor.Reset}`)
//             // console.log(`${cav.cav(cor.FgGreen,cor.Reset)}`) // CAV****


//             // console.log("Received '" + message + "' on '" + topic + "'");
//         });
//     });
// })

clientcon.on('connect', function () {
    clientcon.subscribe(env.Topic[1], function () {
    // clientcon.subscribe(env.Topic, function () {
        // Quando a messagem chegar, esse função sera executada. 
        clientcon.on('message', function (topic, message, packet) {
            var message_str = JSON.parse(message)
            console.log('Imprimindo do APP ->' ,message_str)
            // data = message_str.DATA
            // console.log(data)
            // console.log(`${cor.FgGreen}BinCtrl${cor.Reset}`)
            // binctrl.InsertsMqtt(message_str)

            console.log(`${cor.FgRed}ConCtrl${cor.Reset}`)
            // console.log(`${cav.cav(cor.FgGreen,cor.Reset)}`) // CAV****
            mconctrl.InsertsMqtt(message_str)

            // console.log("Received '" + message + "' on '" + topic + "'");
        });
    });
})

