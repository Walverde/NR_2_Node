// Imports

const mqtt = require('mqtt');
// const express = require('express');
// const app = express
// app.use(express.json());
var Broker_URL = 'mqtt://localhost';
var Database_URL = 'localhost';
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
var messagem = '{"nome": "nana","email":"anan@adsads2"}' 

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
// client.on('message', mqtt_messsageReceived);
client.on('close', mqtt_close);


// Publicando

// client.on('connect', function () {
    function mqtt_connect () {
    client.subscribe(Topic, function (err) {
      if (!err) {
        client.publish(Topic, messagem)
        // var msn = client.subscribe('node')
        // console.log = (msn)
        
      }
    })
  }
  function mqtt_close(){}


// inscrevendo. 

// function mqtt_connect() {
//   //console.log("Connecting MQTT");
//   client.subscribe(Topic, mqtt_subscribe);
// };

// function mqtt_subscribe(err, granted) {
//   console.log("Subscribed to " + Topic);
//   if (err) {console.log(err);}
// };

// function mqtt_messsageReceived(topic, message, packet) {
//   var message_str = message.toString();
//   var message_json = JSON.parse(message_str)
//   console.log(message_json.name)
//   console.log(message_json.email)
//   return message_str
  

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


