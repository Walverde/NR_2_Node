
const Sequelize = require('sequelize')
// const sequelize = new Sequelize('Node', 'wal', '0101',{ // Config Original
const sequelize = new Sequelize('ddbeng30_teste', 'ddbeng30', 'X2cVnom385', { // Config Silvio
  // host: "192.168.0.32", // Rasp Nova
  // host: "192.168.0.31", // Rasp Original
  host: "162.241.2.79", // Silvio
  dialect: 'mysql'
});


const table01 = sequelize.define('Enertrack', {
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

table01.sync()


// sequelize.authenticate().then(function(){
//     console.log("conectado")
// }).cath(function(){
//     console.log("Errou"+err)
// })