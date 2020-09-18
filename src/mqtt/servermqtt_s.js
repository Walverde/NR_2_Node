// Imports

const express = require('express');
const saved = require('../controllers/Zconst_mqtt')
const { store } = require('../controllers/UserController');
const acess = require('../acessos/databases');

const mqtt = require('mqtt');
var Broker_URL = 'mqtt://192.168.0.31';
var Database_URL = 'localhost';



var Topic = "JE05/pub"; // topico aqui. 
var options = {
  clientId: 'node',
  port: 1883,
  //username: 'mqtt_user',
  //password: 'mqtt_password',	
  keepalive: 60
};

var client = mqtt.connect(Broker_URL, options);
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
  console.log("Inscrito no topico: " + Topic);
  if (err) { console.log(err); }
};

function mqtt_messsageReceived(topic, message, packet) {

  // database..... (local)
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize('Node', 'wal', '0101',
    {
      host: '192.168.0.31',
      dialect: 'mysql'
    });




  // var message_str = message.toString(); //original
  var message_str = JSON.parse(message);
  // var message_json = JSON.parse(message_str)
  // console.log(message_json.nname)
  // console.log(message_json.email)



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
  // // saved.store(d1,d2)
  // User.create({name: "wal",email: "d2"})  

  // console.log(message_str.nome + message_str.email)
  let msss = "Amostra console: "
  console.log(msss, d1, d2,)
  // var {nome, email} =  message_str.body
  const User2 = sequelize.define('DadosBin', {
    // divisão
    VARMS: {
      type: Sequelize.INTEGER,
    },
    VBRMS: {
      type: Sequelize.INTEGER,
    },
    VCRMS: {
      type: Sequelize.INTEGER,
    },
    // Corrente. 
    IARMS: {
      type: Sequelize.INTEGER,
    },
    IBRMS: {
      type: Sequelize.INTEGER,
    },
    ICRMS: {
      type: Sequelize.INTEGER,
    },
    //VA
    VABRMS: {
      type: Sequelize.INTEGER,
    },
    VBCRMS: {
      type: Sequelize.INTEGER,
    },
    VCARMS: {
      type: Sequelize.INTEGER,
    },
    VABCTRMS: {
      type: Sequelize.INTEGER,
    },
    //PQS
    PA: {
      type: Sequelize.INTEGER,
    },
    PB: {
      type: Sequelize.INTEGER,
    },
    PC: {
      type: Sequelize.INTEGER,
    },
    PT: {
      type: Sequelize.INTEGER,
    },
    QA: {
      type: Sequelize.INTEGER,
    },
    QB: {
      type: Sequelize.INTEGER,
    },
    QC: {
      type: Sequelize.INTEGER,
    },
    QT: {
      type: Sequelize.INTEGER,
    },
    SA: {
      type: Sequelize.INTEGER,
    },
    SB: {
      type: Sequelize.INTEGER,
    },
    SC: {
      type: Sequelize.INTEGER,
    },
    ST: {
      type: Sequelize.INTEGER,
    },
    //Fator de potencia
    FPA: {
      type: Sequelize.INTEGER,
    },
    FPB: {
      type: Sequelize.INTEGER,
    },
    FPC: {
      type: Sequelize.INTEGER,
    },
    FPT: {
      type: Sequelize.INTEGER,
    },
    // KVH
    KVARHA: {
      type: Sequelize.INTEGER,
    },
    KVARHB: {
      type: Sequelize.INTEGER,
    },
    KVARHC: {
      type: Sequelize.INTEGER,
    },
    KVARHT: {
      type: Sequelize.INTEGER,
    },
    KWHA: {
      type: Sequelize.INTEGER,
    },
    KWHB: {
      type: Sequelize.INTEGER,
    },
    KWHC: {
      type: Sequelize.INTEGER,
    },
    KWHT: {
      type: Sequelize.INTEGER,
    },
    // Outros
    FREQ: {
      type: Sequelize.INTEGER,
    },
    SERRS: {
      type: Sequelize.INTEGER,
    },
    WRSSI: {
      type: Sequelize.INTEGER
    }
    // divisão
  })


  
  User2.create({
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

  return d1, d2

}