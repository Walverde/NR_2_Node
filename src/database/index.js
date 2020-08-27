const { Sequelize } = require('sequelize'); // importando sequelize. 
const dbacess = require('../acessos/databases.js'); // importando credenciais de acesso ao db. 
const User = require('../models/User'); // importando modelo de tabela. 

const acesso = new Sequelize(dbacess); // instanciando sequelize e "mostrando" credenciais de acesso ao banco. 

User.init(acesso); //  usado o modelo para [User] importado acima ↑, para gravar a tabela, em [acesso]


module.exports =  acesso; // exportando a coneção, para ser usada em outo momento. (Em outra parte do codigo)]

