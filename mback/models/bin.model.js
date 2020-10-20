const sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
	const Control = sequelize.define('EnertrackData', {
		
		VARMS: {
			type: Sequelize.INTEGER,
		  },
		  VBRMS: {
			type: Sequelize.INTEGER,
		  },
		  VCRMS: {
			type: Sequelize.INTEGER,
		  },
		  // Corrente. 
		  IARMS: {
			type: Sequelize.INTEGER,
		  },
		  IBRMS: {
			type: Sequelize.INTEGER,
		  },
		  ICRMS: {
			type: Sequelize.INTEGER,
		  },
		  //VA
		  VABRMS: {
			type: Sequelize.INTEGER,
		  },
		  VBCRMS: {
			type: Sequelize.INTEGER,
		  },
		  VCARMS: {
			type: Sequelize.INTEGER,
		  },
		  VABCTRMS: {
			type: Sequelize.INTEGER,
		  },
		  //PQS
		  PA: {
			type: Sequelize.INTEGER,
		  },
		  PB: {
			type: Sequelize.INTEGER,
		  },
		  PC: {
			type: Sequelize.INTEGER,
		  },
		  PT: {
			type: Sequelize.INTEGER,
		  },
		  QA: {
			type: Sequelize.INTEGER,
		  },
		  QB: {
			type: Sequelize.INTEGER,
		  },
		  QC: {
			type: Sequelize.INTEGER,
		  },
		  QT: {
			type: Sequelize.INTEGER,
		  },
		  SA: {
			type: Sequelize.INTEGER,
		  },
		  SB: {
			type: Sequelize.INTEGER,
		  },
		  SC: {
			type: Sequelize.INTEGER,
		  },
		  ST: {
			type: Sequelize.INTEGER,
		  },
		  //Fator de potencia
		  FPA: {
			type: Sequelize.INTEGER,
		  },
		  FPB: {
			type: Sequelize.INTEGER,
		  },
		  FPC: {
			type: Sequelize.INTEGER,
		  },
		  FPT: {
			type: Sequelize.INTEGER,
		  },
		  // KVH
		  KVARHA: {
			type: Sequelize.INTEGER,
		  },
		  KVARHB: {
			type: Sequelize.INTEGER,
		  },
		  KVARHC: {
			type: Sequelize.INTEGER,
		  },
		  KVARHT: {
			type: Sequelize.INTEGER,
		  },
		  KWHA: {
			type: Sequelize.INTEGER,
		  },
		  KWHB: {
			type: Sequelize.INTEGER,
		  },
		  KWHC: {
			type: Sequelize.INTEGER,
		  },
		  KWHT: {
			type: Sequelize.INTEGER,
		  },
		  // Outros
		  FREQ: {
			type: Sequelize.INTEGER,
		  },
		  SERRS: {
			type: Sequelize.INTEGER,
		  },
		  WRSSI: {
			type: Sequelize.INTEGER
		  }

	});

	return Control;
}