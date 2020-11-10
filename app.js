// Databases ---------------------------------------------------------
const binctrl = require('./back/controllers/bintrack.controller')
// const configs = require('./back/settings/data/controller/dbs.controller')
const mconctrl = require('./back/controllers/+ctrl.controller')
const binuto = require('./back/controllers/binuto.controller')
//Cor-----------------------------------------------------------------
const cor = require('./back/settings/cores')
// Mqtt --------------------------------------------------------------
const mqtts = require('./back/mqtt/config/mqttconfig')
const cav = require('./cav')
//--------------------------------------------------------------------
const clientbin = mqtts.connecting
const clientcon = mqtts.connecting
const env = mqtts.envs

// Energia = Potência x Tempo
// 103 kWh = Potência x 720 h
// 103 kWh/720 h = Potência
// Potência = 0,143 kW ou 143 W
// var client = mqtt.connect(, options);

// const insert = function() {
// setTimeout(function () {

// }, 10 * 1000)







// var count = new Number();
var count = 5;
// variável para o contador
var contador;
// var tempo = document.getElementById("tempo");

function start() {
    if ((count - 1) >= 0) {
        count = count - 1;
        contador = setTimeout(start, 1000);
        console.log(`Inserindo o proximo registro em: ${count}s`);
    }
    else if (count == 0) {
        console.log('Executanod função Mqtt')
        clientcon.on('connect', function () {
            clientcon.subscribe(env.Topic, function () {
                // Quando a messagem chegar, essa função sera executada. 
                // setTimeout(function () {
                clientcon.on('message', function (topic, message, packet) {
                    var message_str = JSON.parse(message)
                    console.log(`${cor.FgCyan}Imprimindo do APP ->${cor.FgYellow} Registro inserido ${cor.FgBlack}${cor.BgGreen}ConCtrl${cor.Reset}`)
                    //inserindo no bando de dados os dados recibidos no MQTT
                    binuto.InsertsMqtt(message_str)
                });
                // }, 10 * 1000)
            });
        })
    }
}

function stop() {
    // tempo.innerText = "Parado em " + count;
    clearInterval(contador);
}

start();
// stop();












// FUNCIONAIS -----------------------------------------------------------------------------


    // clientcon.on('connect', function () {
    //     clientcon.subscribe(env.Topic, function () { 
    //         // Quando a messagem chegar, esse função sera executada. 
    //         clientcon.on('message', function (topic, message, packet) {
    //             var message_str = JSON.parse(message)
    //             console.log(`${cor.FgCyan}Imprimindo do APP ->${cor.FgYellow} Registro inserido ${cor.FgBlack}${cor.BgRed}BinCtrl${cor.Reset}`)
    //             //inserindo no bando de dados os dados recibidos no MQTT
    //             binctrl.InsertsMqtt(message_str)
    //         });
    //     });
    // })






