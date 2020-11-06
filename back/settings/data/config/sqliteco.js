const { dirname } = require('path');
const path = require('path')
const dirPath = path.join(__dirname, '/data.sqlite3')

// console.log("dirname local",dirPath)
// console.log("Process",process.cwd())

const env = {
    database: 'database',
    username: 'username',
    password: 'password',
    // host: '192.168.0.31',
    dialect: 'sqlite',
    // storage: '../Data/Settings.sqlite3',
    // storage: '../data/Settings.sqlite3',
    storage: dirPath, 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
   
  module.exports = env;
  