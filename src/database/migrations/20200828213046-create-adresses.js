'use strict';

// Esse arquivo servirá apenas para criar a tabela. (tbm pode ser criado direto pelo workbanch, mas nesse caso usei a migration para ter controle pelo proprio sequelize)

// o Migrate de dados foi criado com o comnado: 
//→ npx sequelize migration:create --name=nome_da_migration
// Para criar a tablela a partir do Migrate
//→ npx sequelize db:migrate 

// Apos criação da tabela, o proximo campo a ser configurado é o models.  

// exemplo re ralação 1-n ou "um pra muitos"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('endereco', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: { // aqui vai referenciar qual usuario é dono do endereço. (Exemplo de relação 1-n)
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id'}, // vai criar uma chave "estrangeira"
        onUpdate: 'CASCADE', // se alterar o id na tabela user, aqui tbm vai ser. 
        onDelete: 'CASCADE', // se deletado, o endereço vai ser deletado tbm. 
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rua:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false,
      }
  });
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('addresses');
    
  }
};
