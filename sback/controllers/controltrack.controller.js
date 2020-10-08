const { Sequelize } = require('./config/db.config.js');
const db = require('./config/db.config.js');
const Customer = db.customers;

// const Op = db.Sequelize.Op;


exports.InsertsMqtt = (message_str) => {
    var message_str = JSON.parse(message);

    data = message_str.DATA
    // d1 = data.VARMS
    // d2 = data.VBRMS
    d1 = data.VARMS
    d2 = data.VBRMS
    d3 = data.VCRMS
    d4 = data.IARMS
    d5 = data.IBRMS
    d6 = data.ICRMS
    d7 = data.VABRMS
    d8 = data.VBCRMS
    d9 = data.VCARMS
    d10 = data.VABCTRMS
    d11 = data.PA
    d12 = data.PB
    d13 = data.PC
    d14 = data.PT
    d15 = data.QA
    d16 = data.QB
    d17 = data.QC
    d18 = data.QT
    d19 = data.SA
    d20 = data.SB
    d21 = data.SC
    d22 = data.ST
    d23 = data.FPA
    d24 = data.FPB
    d25 = data.FPC
    d26 = data.FPT
    d27 = data.KVARHA
    d28 = data.KVARHB
    d29 = data.KVARHC
    d30 = data.KVARHT
    d31 = data.KWHA
    d32 = data.KWHB
    d33 = data.KWHC
    d34 = data.KWHT
    d35 = data.FREQ
    d36 = data.SERRS
    d37 = data.WRSSI


    Customer.create({
        VARMS: d1,
        VBRMS: d2,
        VCRMS: d3,
        IARMS: d4,
        IBRMS: d5,
        ICRMS: d6,
        VABRMS: d7,
        VBCRMS: d8,
        VCARMS: d9,
        VABCTRMS: d10,
        PA: d11,
        PB: d12,
        PC: d13,
        PT: d14,
        QA: d15,
        QB: d16,
        QC: d17,
        QT: d18,
        SA: d19,
        SB: d20,
        SC: d21,
        ST: d22,
        FPA: d23,
        FPB: d24,
        FPC: d25,
        FPT: d26,
        KVARHA: d27,
        KVARHB: d28,
        KVARHC: d29,
        KVARHT: d30,
        KWHA: d31,
        KWHB: d32,
        KWHC: d33,
        KWHT: d34,
        FREQ: d35,
        SERRS: d36,
        WRSSI: d37
    })

}
