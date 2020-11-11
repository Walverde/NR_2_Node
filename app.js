// Databases ---------------------------------------------------------
// const binctrl = require('./back/controllers/bintrack.controller')
// const configs = require('./back/settings/data/controller/dbs.controller')

// const binuto = require('./back/controllers/binuto.controller')
//Cor-----------------------------------------------------------------
// const { extensions } = require('sequelize/types/lib/utils/validator-extras')
const cor = require('./back/settings/cores')
// Mqtt --------------------------------------------------------------
// const mqtts = require('./back/mqtt/config/mqttconfig')
const cav = require('./cav')
//--------------------------------------------------------------------
// const clientbin = mqtts.connecting

// Energia = Potência x Tempo
// 103 kWh = Potência x 720 h
// 103 kWh/720 h = Potência
// Potência = 0,143 kW ou 143 W
// var client = mqtt.connect(, options);

// const insert = function() {
// setTimeout(function () {

// }, 10 * 1000)

const out = function () {
    if (set == 0) {
        setInterval(function () {
            set = 3
        }, 0.5 * 1000)
    }
}

let timeinset = 0.5
let segundos = 3
let set = segundos; // Tem que em segundos que o programa vai aguarda para chamar a função de dados Mqtt. 
var contador;  // Um segundo em milissegundos. 
var pass;

function start() {

    if ((set - 1) >= 0) {
        set = set - 1;
        contador = setTimeout(start, 1000);
        console.log(`Inserindo o proximo registro em: ${set}s`);
        // var insert = 3
    }
    else if (set == 0) {
        for (pass = 0; pass < 3; pass++) {
            // set = 3
            const mqtts = require('./back/mqtt/config/mqttconfig')
            const env = mqtts.envs
            const clientcon = mqtts.connecting
            console.log('Executanod função Mqtt')
            clientcon.on('connect', function () {
                clientcon.subscribe(env.Topic, function () {
                    clientcon.on('message', function (topic, message, packet) {
                        console.log(`Mensagem recebida: ${message}`)
                        var message_str = JSON.parse(message)
                        console.log(`${cor.FgCyan}Imprimindo do APP ->${cor.FgYellow} Registro inserido ${cor.FgBlack}${cor.BgGreen}ConCtrl${cor.Reset}`)
                        let binctrl = require('./back/controllers/bintrack.controller')
                        binctrl.InsertsMqtt(message_str)
                        console.log('M0', set, pass)
                
                    });
                });
            })
        }
        if (pass == 3){
            break
        }
    }
}


start()

























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






