const env = require('./sqliteco.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
  storage: env.storage,
  dialect: env.dialect,
  operatorsAliases: 0,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 

//Models/tables // AQUI FOI REQUERIDO OS MODELOS // 
db.creds = require('../model/cads.models')(sequelize, Sequelize);
db.busca = require('../model/busca.models')(sequelize, Sequelize);
 
 
module.exports = db;