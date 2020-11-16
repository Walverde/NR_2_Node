let mqtt = require('mqtt') // Biblioteca
const db = require('./sql/db')
let client = mqtt.connect('mqtt:192.168.0.31:1883')// Parâmetros de conexão. 
let topic = "JE05/pub" // Tópico
let cont = 1;
console.log('inicio')

client.on('connect', () => { // Quando o evento connect ocorre, essa arrow function é acionada. 
    client.subscribe(topic) // Função de inscrição no topico. (Informado acima, "topic")
})



// MYSQL  ------------- Tentando conxão do lado de fora. 
let mysql = require('mysql2')
const db = mysql.createConnection({
    host: "ddbengenharia.com.br",
    user: 'ddbeng30_scd',
    password: '78985214',
    database: 'ddbeng30_teste'
})

db.connect(() => {
    console.log('DB conctado')
})


console.log('connect')

client.on('message', (topic, message) => { // Quando o evento message ocorre, essa arrow function é acionada.

    if (cont >= 5) {
        cont = 1;
        // message = message.toString() // Converte o pacote recebido em uma String. (Para a bublicação no banco de dados, usei o JSON.parse, esse converte o pacte em um JSON. Assim podendo usaro o dot-notation posteriormente)
        // console.log(message)
        let datas = JSON.parse(message)
        let data = datas.DATA


        let sql = 'insert into BinDataMinutos set ?'

        var registro = {
            VARMS: data.VARMS,
            VBRMS: data.VBRMS,
            VCRMS: data.VCRMS,
            IARMS: data.IARMS,
            IBRMS: data.IBRMS,
            ICRMS: data.ICRMS,
            VABRMS: data.VABRMS,
            VBCRMS: data.VBCRMS,
            VCARMS: data.VCARMS,
            VABCTRMS: data.VABCTRMS,
            PA: data.PA,
            PB: data.PB,
            PC: data.PC,
            PT: data.PT,
            QA: data.QA,
            QB: data.QB,
            QC: data.QC,
            QT: data.QT,
            SA: data.SA,
            SB: data.SB,
            SC: data.SC,
            ST: data.ST,
            FPA: data.FPA,
            FPB: data.FPB,
            FPC: data.FPC,
            FPT: data.FPT,
            KVARHA: data.KVARHA,
            KVARHB: data.KVARHB,
            KVARHC: data.KVARHC,
            KVARHT: data.KVARHT,
            KWHA: data.KWHA,
            KWHB: data.KWHB,
            KWHC: data.KWHC,
            KWHT: data.KWHT,
            FREQ: data.FREQ,
            SERRS: data.SERRS,
            WRSSI: data.WRSSI
        }
        db.query(sql, registro, (error, output) => {
            if (error) {
                console.log("Error Code: ", error)
            } else {
                console.log("Dados inceridos com sucesso") // Controle de console. 
            }
        })
        db.destroy(() => {
            console.log('DB Desconctado')
        })
    }
    console.log(cont) //  Controle de console 
    cont = cont + 1;
    // console.log('interval', interval) 
})


// Dae baca, nobre. Longe de querer arrumar briga com vc, jamás. 
// Como ja tinha falado antes, eu me envolvi sem querer nesse grupo ae e ja arrumei pra cabeça. Mas assim, como eu ja to merda, quero ser o rei na merda. Se for pra fazer, vou fazer certo. 
// uma cosia é certa, tu nunca vai me ver discutindo e fazendo barraco com ninguem de nem um lugar.

// Se ficou chateado, na moral, te peço desculpas. Não foi a intenção em nem um momento. 
// Como disse, não sabia que ia dar esse rolo todo. Estou ate reavaliando, pois um dos caras tem o rabo preso, inimizadas com um monte de gente. Puta quil pariu. 