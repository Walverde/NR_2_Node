const dbs = require('./config/db.config')


/////////DROP IF NOT EXIST ///////////////////////////////////
// const dbs = require('./app/config/db.config.js');
dbs.busca.sync({force: true}).then(() => { // <- Banco de dados. 
// dbs.bin.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});
/////////DROP IF NOT EXIST ///////////////////////////////////