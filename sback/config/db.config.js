

const env = require('./env.js');

const Sequelize = require('sequelize');




const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

// var sconfigs = instance
// sbin = instance
// scon = instance
// scustomer = instance

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.control = require('../models/control.model')(sequelize, Sequelize);
db.bin = require('../model/bin.model')(sequelize, Sequelize);
db.configs = require('../model/config.model')(sequelize, Sequelize);
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);



module.exports =  db
