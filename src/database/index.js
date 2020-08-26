const { Sequelize } = require('sequelize'); // importando sequelize. 
const dbacess = require('../acessos/databases.js'); // importando credenciais de acesso ao db. 


const acesso = new Sequelize(dbacess); // instanciando sequelize e "mostrando" credenciais de acesso ao banco. 

module.exports =  acesso; // exportando a coneção, para ser usada em outo momento. (Em outra parte do codigo)]

