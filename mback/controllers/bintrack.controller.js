
const db = require('../config/db.config');
const Customer = db.customers;


exports.InsertsMqtt = (message_str) => {
    var message_str = JSON.parse(message);

    data = message_str.DATA


    d1 = data.VARMS
    d2 = data.VBRMS
    d3 = data.VCRMS
    // Corrente. 
    d4 = data.IARMS
    d5 = data.IBRMS
    d6 = data.ICRMS
    // 
    d7 = data.PTA
    d8 = data.PTB
    d9 = data.PTC
    // Fator de potencia

    d10 = data.FPA
    d11 = data.FPB
    d12 = data.FPC


    Customer.create({
        VARMS: d1,
        VBRMS: d2,
        VCRMS: d3,
        IARMS: d4,
        IBRMS: d5,
        ICRMS: d6,

        PTA: d7,
        PTB: d8,
        PTC: d9,

        FPA: d10,
        FPB: d11,
        FPC: d12,


    })

}
