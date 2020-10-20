'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bin', {
      id: {
        //Tensao
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      VARMS: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      VBRMS: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      VCRMS: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // Corrente. 
      IARMS: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      IBRMS: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ICRMS: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      //VA
      VABRMS: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      VBCRMS: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      VCARMS: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      VABCTRMS: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      //PQS
      PA: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      PB: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      PC: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      PT: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      QA: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      QB: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      QC: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      QT: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      SA: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      SB: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      SC: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ST: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      //Fator de potencia
      FPA: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      FPB: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      FPC: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      FPT: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // KVH
      KVARHA: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      KVARHB: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      KVARHC: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      KVARHT: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      KWHA: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      KWHB: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      KWHC: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      KWHT: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // Outros
      FREQ: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      SERRS: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      WRSSI: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // Tamestamps 
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bin');
  }
};
