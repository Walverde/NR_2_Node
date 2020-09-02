// Imports

const express = require('express'); 
const saved = require('../controllers/Zconst_mqtt')
const mqtt = require('mqtt');
const { store } = require('../controllers/UserController');
var Broker_URL = 'mqtt://localhost';
var Database_URL = 'localhost';
const acess = require ('../acessos/databases');


var Topic = "node";
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


function mqtt_connect() {
  console.log("Conectando ao brocker MQTT");
  client.subscribe(Topic, mqtt_subscribe);
};

function mqtt_subscribe(err, granted) {
  console.log("Incrito no topico" + Topic);
  if (err) {console.log(err);}
};

function mqtt_messsageReceived(topic, message, packet) {

  // database..... (local)
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
  
  User2.create({
    nome: d1,
    email: d2
  })
  
  

  return d1, d2
}


