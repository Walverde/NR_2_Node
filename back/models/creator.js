// const dbs = require('./config/db.config')
const dbs = require('../config/db.config')


/////////DROP IF NOT EXIST ///////////////////////////////////
// const dbs = require('./app/config/db.config.js');
// dbs.con.sync({force: true}).then(() => { // <- Banco de dados. con = CtrlData
dbs.bin.sync({force: true}).then(() => {
  console.log('Tabela criada com sucesso');
});
/////////DROP IF NOT EXIST ///////////////////////////////////