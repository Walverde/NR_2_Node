// cone 

const { Sequelize } = require('sequelize'); // importando sequelize. 
const dbacess = require('../acessos/databases.js'); // importando credenciais de acesso ao db. 
const User = require('../models/User'); // importando modelo de tabela User. 
const Address = require('../models/Address'); // importando modelo de tabela User. 
const Save = require('../models/Save')
const acesso = new Sequelize(dbacess); // instanciando sequelize e "mostrando" credenciais de acesso ao banco. 


//campos esse serão usados em rotas. (em: /src/routes.js)
Save.init(acesso);
User.init(acesso); //  usado o modelo para [User] importado acima ↑, para gravar a tabela, em [acesso]
Address.init(acesso); //  usado o modelo para [Address] importado acima ↑, para gravar a tabela, em [acesso]
Address.associate(acesso.models);

module.exports =  acesso; // exportando a coneção, para ser usada em outo momento. (Em outra parte do codigo)]

