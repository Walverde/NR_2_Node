// Imports


// const { Model, DataTypes } = require('sequelize');
// 

const express = require('express'); 


const saved = require('../controllers/Zconst_mqtt')
// const routes = express.Router();

const mqtt = require('mqtt');
// const User = require('../models/User');
const { store } = require('../controllers/UserController');
// const express = require('express');
// const app = express
// app.use(express.json());
var Broker_URL = 'mqtt://localhost';
var Database_URL = 'localhost';

const acess = require ('../acessos/databases');




// const client  = mqtt.connect(broker) // host, pode ser o ip tbm: ex: '192.168.0.31'

// mini interface
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question('Insira o topico', clientId => {
//   console.log('Topico escolhido ${Topic}!');
//   readline.close();
//   // return Topic
// })

var Topic = "node";
// var messagem = 'pew de mais'

// configurações

var options = {
	clientId: 'node',
	port: 1883,
	//username: 'mqtt_user',
	//password: 'mqtt_password',	
	keepalive : 60
};

var client  = mqtt.connect(Broker_URL, options);
client.on('connect', mqtt_connect);
// client.on('reconnect', mqtt_reconnect);
// client.on('error', mqtt_error);
client.on('message', mqtt_messsageReceived);
// client.on('close', mqtt_close);


// Publicando

// client.on('connect', function () {
//     client.subscribe(topic, function (err) {
//       if (!err) {
//         client.publish(topic, messagem)
//         // var msn = client.subscribe('node')
//         // console.log = (msn)
//       }
      
//     })
//   })


// inscrevendo. 

function mqtt_connect() {
  //console.log("Connecting MQTT");
  client.subscribe(Topic, mqtt_subscribe);
};

function mqtt_subscribe(err, granted) {
  console.log("Subscribed to " + Topic);
  if (err) {console.log(err);}
};

function mqtt_messsageReceived(topic, message, packet) {

  const Sequelize = require('sequelize');
const sequelize = new Sequelize ('exemplo','root','0101',{
  host: 'localhost',
  dialect: 'mysql'
});




  // var message_str = message.toString(); //original
  var message_str = JSON.parse(message);
  // var message_json = JSON.parse(message_str)
  // console.log(message_json.nname)
  // console.log(message_json.email)



  d1 = message_str.nome
  d2 = message_str.email



  // // saved.store(d1,d2)
  // User.create({name: "wal",email: "d2"})  

  // console.log(message_str.nome + message_str.email)
  console.log(d1 + d2 + "isso")
  // var {nome, email} =  message_str.body

  

  const User2 = sequelize.define('dados', {
    nome: {
      type: Sequelize.STRING
    },
    email:{
      type: Sequelize.STRING
    } 
  })

  // User2.sync({force: true})
  
  User2.create({
    nome: d1,
    email: d2
  })
  
  

  return d1, d2
}







// module.exports = mqtt_messsageReceived



// client.on('connect', function(){
//   var msn = client.subscribe(topic)
//   console.log =(msn.toString());
// })

// // client.on('connect', function (topic, message) {
// //     // message is Buffer
// //     console.log(message.toString())
// //     client.end()
// //   }) 


