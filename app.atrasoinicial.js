// Tá funcionando, mas com apenas delay de inicio. 

// const { extensions } = require('sequelize/types/lib/utils/validator-extras')
const cor = require('./back/settings/cores')
// Mqtt --------------------------------------------------------------
// const mqtts = require('./back/mqtt/config/mqttconfig')
const cav = require('./cav')
//--------------------------------------------------------------------
var hora = 11;
var minuto = 59;
var ss = 58;
var delay = 1000 * 0.5; //1 seconds

let segmin = 60

setInterval(function () {
    ss = ss + 1
    // console.log(ss, "s");
    if (ss == 10) {
        console.log("Inserindo dados")
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
                    // console.log('M0', set, pass)
                });
            });
        })
    }
    console.log(`${(hora <= 9 ? "0" + hora : hora)} : ${(minuto <= 9 ? "0" + minuto : minuto)} : ${(ss <= 9 ? "0" + ss : ss)}`)
    if (ss == segmin) {
        minuto = minuto + 1
        // console.log(`${cor.FgCyan}${minuto}m${cor.Reset}`)
        ss = 0
        if (minuto == segmin) {
            hora = hora + 1
            // console.log(`${cor.FgRed}${hora}h${cor.Reset}`)
            minuto = 0
            if (hora == 12) {
                hora = 0;
            }
        }
    }
}, delay);























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






