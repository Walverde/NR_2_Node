
const db = require('../config/db.config');
const controlercon = db.con;
const cor = require('../settings/cores')


exports.InsertsMqtt = (msn) => {
    console.log(`${cor.FgCyan}Executando do ${cor.FgGreen}controltrack.controller${cor.Reset}`)

    data = msn.DATA

    // d1 = data.VARMS
    // d2 = data.VBRMS
    // d3 = data.VCRMS
    // // Corrente. 
    // d4 = data.IARMS
    // d5 = data.IBRMS
    // d6 = data.ICRMS
    // // 
    // d7 = data.PTA
    // d8 = data.PTB
    // d9 = data.PTC
    // // Fator de potencia
    // d10 = data.FPA
    // d11 = data.FPB
    // d12 = data.FPC

    controlercon.create({

        // VARMS: d1,
        // VBRMS: d2,
        // VCRMS: d3,
        // IARMS: d4,
        // IBRMS: d5,
        // ICRMS: d6,
        // PTA: d7,
        // PTB: d8,
        // PTC: d9,
        // FPA: d10,
        // FPB: d11,
        // FPC: d12,

        VARMS: data.VARMS,
        VBRMS: data.VBRMS,
        VCRMS: data.VCRMS,

        IARMS: data.IARMS,
        IARMS: data.IARMS,
        ICRMS: data.ICRMS,

        PTA: data.PTA,
        PTB: data.PTB,
        PTC: data.PTC,

        FPA: data.FPA,
        FPB: data.FPB,
        FPC: data.FPC,
        // Somados...........(Fase de testes, provisorio)
        KWHA: data.KWHA,
        KWHB: data.KWHB,
        KWHC: data.KWHC,
        KWHT: data.KWHT,
        data: data.data
    })

}
