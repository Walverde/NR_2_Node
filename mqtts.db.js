
let mqtt = require('mqtt')
let client = mqtt.connect('mqtt:192.168.0.31:1883')
let topic = "test"

// MYSQL
let mysql = require('mysql2')
const db = mysql.createConnection({
    //host     : '162.241.2.79',
    host: "ddbengenharia.com.br",
    user: 'ddbeng30_scd',
    password: '78985214',
    database: 'ddbeng30_teste'
})

db.connect(()=>{
    console.log('DB conctado')
})

// Conecting

client.on('ready',() => {
    console.log("recebido")
})


client.on('connect', () => {
    client.subscribe(topic)
})

client.on('message',(topic, message)=>{
    message = message.toString()
    console.log(message)
    let sql = 'insert into '{
        VARMS: data.VARMS,
        VBRMS: data.VBRMS
        VCRMS: data.VCRMS
        IARMS: data.IARMS
        IBRMS: data.IBRMS
        ICRMS: data.ICRMS
        VABRMS: data.VABRMS
        VBCRMS: data.VBCRMS
        VCARMS: data.VCARMS
        VABCTRMS: data.VABCTRMS
        PA: data.PA
        PB: data.
        PC: data.
        PT: data.
        QA: data.
        QB: data.
        QC: data.
        QT: data.
        SA: data.
        SB: data.
        SC: data.
        ST: data.
        FPA: data.
        FPB: data.
        FPC: data.
        FPT: data.
        KVARHA: data.
        KVARHB: data.
        KVARHC: data.
        KVARHT: data.
        KWHA: data.
        KWHB: data.
        KWHC: data.
        KWHT: data.
        FREQ: data.
        SERRS: data.
        WRSSI: data.

    }
})

https://www.youtube.com/watch?v=GyLqVBcidO0&ab_channel=DimasSetoWicaksana