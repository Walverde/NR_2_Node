const sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
	const Control = sequelize.define('EnertrackData', {
		id_nome: { type: Sequelize.INTEGER, },
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
		PTA: { type: Sequelize.INTEGER, },
		PTB: { type: Sequelize.INTEGER, },
		PTC: { type: Sequelize.INTEGER, },
		//VA

		FPA: {
			type: Sequelize.INTEGER,
		},
		FPB: {
			type: Sequelize.INTEGER,
		},
		FPC: {
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

	});

	return Control;
}