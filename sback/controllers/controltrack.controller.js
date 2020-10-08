const { Sequelize } = require('./config/db.config.js');
const db = require('./config/db.config.js');
const Customer = db.customers;

const Op = db.Sequelize.Op;


exports.inserts = () => {
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
