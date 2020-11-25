// const mysql = require("mysql");

// const db = mysql.createConnection({
//     //host     : '162.241.2.79',
//     host: "ddbengenharia.com.br",
//     user: 'ddbeng30_scd',
//     password: '78985214',
//     database: 'ddbeng30_teste'
// })

// let post = {
//     time: i,
//     data: '2020/09/' + j,
//     kwh: kwh1,
// };

// db.connect((err) => {
//     if (err) {
//         //console.log(err);
//         throw err;
//     }
//     console.log("MSQL Connected...");
// });


// let sql = 'INSERT INTO Data SET ?';
// //console.log(sql+" "+post.time+" "+post.kwh);
// db.query(sql, post, (err, result) => {
//     if (err) throw err;
//     //console.log(result);
//     //console.log("j: "+j+" | i: "+i);
// });




// Tá funcionando, mas com apenas delay de inicio. 

// const { extensions } = require('sequelize/types/lib/utils/validator-extras')
const cor = require('./back/settings/cores')
// Mqtt --------------------------------------------------------------
// const mqtts = require('./back/mqtt/config/mqttconfig')
const cav = require('./cav')
//--------------------------------------------------------------------
var hora = 0;
var minuto = 0;
var ss = 0;
var delay = 1000 * 0.09; //1 seconds
let segmin = 60

const setim = setInterval(function () {
    InserirDados()
    // ss = ss + 1
    // // console.log(ss, "s");
    // if (ss == 30) {
    //     console.log("Inserindo dados")
    //     const mqtts = require('./back/mqtt/config/mqttconfig')
    //     const env = mqtts.envs
    //     const clientcon = mqtts.connecting
    //     console.log('Executanod função Mqtt')

    //     clientcon.on('connect', function () {
    //         clientcon.subscribe(env.Topic, function () {
    //             clientcon.on('message', function (topic, message, packet) {
    //                 console.log(`Mensagem recebida: ${message}`)
    //                 var message_str = JSON.parse(message)
    //                 console.log(`${cor.FgCyan}Imprimindo do APP ->${cor.FgYellow} Registro inserido ${cor.FgBlack}${cor.BgGreen}ConCtrl${cor.Reset}`)
    //                 let binuto = require('./back/controllers/binuto.controller')
    //                 console.log('Executanodsdffssfd ')
    //                 binuto.InsertsMqtt(message_str)
    //                 clientcon.end()

    //                 // console.log('M0', set, pass)
    //             });
    //         });
    //     })
    //     // continue
    //     // clientcon.on('close',mqtt_close)
    // }
    // console.log(`${(hora <= 9 ? "0" + hora : hora)} : ${(minuto <= 9 ? "0" + minuto : minuto)} : ${(ss <= 9 ? "0" + ss : ss)}`)
    
    // // contador............... 
    
    // if (ss == segmin) {
    //     minuto = minuto + 1
    //     // console.log(`${cor.FgCyan}${minuto}m${cor.Reset}`)
    //     ss = 0
    //     if (minuto == segmin) {
    //         hora = hora + 1
    //         // console.log(`${cor.FgRed}${hora}h${cor.Reset}`)
    //         minuto = 0
    //         if (hora == 12) {
    //             hora = 0;
    //         }
    //     }
    // }
}, 5000);



function InserirDados(){
        console.log("1 - Inserindo dados")
        const mqtts = require('./back/mqtt/config/mqttconfig')
        const env = mqtts.envs
        const clientcon = mqtts.connecting
        console.log('2 - Executanod função Mqtt')
        
        console.log('2 - clientconisConnected', clientcon.connected)
        
        clientcon.on('connect', function () {
            console.log('3 - conect')
            console.log('3 - clientconisConnected', clientcon.connected)
            clientcon.subscribe(env.Topic, function () {
                console.log('4 - subscribe')
                clientcon.on('message', function (topic, message, packet) {
                    console.log(`5 - Mensagem recebida: ${message}`)
                    var message_str = JSON.parse(message)
                    console.log(`${cor.FgCyan}Imprimindo do APP ->${cor.FgYellow} Registro inserido ${cor.FgBlack}${cor.BgGreen}ConCtrl${cor.Reset}`)
                    let binuto = require('./back/controllers/binuto.controller')
                    console.log('Executanodsdffssfd ')
                    binuto.InsertsMqtt(message_str)
                    console.log('before close.end')
                    clientcon.end()
                    
                    console.log('after close.end')

                    // console.log('M0', set, pass)
                });
            });
        })
}




// ================ Tentativa com o TRY =====================

async function todo() {
    try { // Aqui vai ficar o codigo. 
        const nfunction = await setim
        // continue
        // clientcon.on('close',mqtt_close)
    } catch (err) { // Em caso de erro. 
        console.log("Erro Code: >>>>> ", err)
    }
}
todo()

// ================ Tentativa com o TRY =====================
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