


let mqtt = require('mqtt') // Biblioteca
const db = require('./sql/db')
let client = mqtt.connect('mqtt:192.168.0.31:1883')// Parâmetros de conexão. 
let topic = "JE05/pub" // Tópico
let cont = 1;
console.log('inicio')

client.on('connect', () => { // Quando o evento connect ocorre, essa arrow function é acionada. 
    console.log('Evento connect')
    client.subscribe(topic) // Função de inscrição no topico. (Informado acima, "topic")
})


console.log('Conectado')

client.on('message', (topic, message) => { // Quando o evento message ocorre, essa arrow function é acionada.

    if (cont >= 30) {
        cont = 1;
        

        // message = message.toString() // Converte o pacote recebido em uma String. (Para a bublicação no banco de dados, usei o JSON.parse, esse converte o pacte em um JSON. Assim podendo usaro o dot-notation posteriormente)
        // console.log(message)
        let datas = JSON.parse(message)
        let data = datas.DATA

        db.insertointu(data)
    }
    console.log(cont) //  Controle de console 
    cont = cont + 1;
    // console.log('interval', interval) 
})

