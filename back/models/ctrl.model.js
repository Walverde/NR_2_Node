const sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
	const Control = sequelize.define('CtrlData', {

		VARMS: {
			type: Sequelize.INTEGER,
		},
		VBRMS: {
			type: Sequelize.INTEGER,
		},
		VCRMS: {
			type: Sequelize.INTEGER,
		},
		// Correntes
		IARMS: {
			type: Sequelize.INTEGER,
		},
		IBRMS: {
			type: Sequelize.INTEGER,
		},
		ICRMS: {
			type: Sequelize.INTEGER,
		},
		// Potencia.  
		PTA: {
			type: Sequelize.INTEGER,
		},
		PTB: {
			type: Sequelize.INTEGER,
		},
		PTC: {
			type: Sequelize.INTEGER,
		},
		//Fatores de potencia
		FPA: {
			type: Sequelize.INTEGER,
		},
		FPB: {
			type: Sequelize.INTEGER,
		},
		FPC: {
			type: Sequelize.INTEGER,
		},
		// Consumos. 

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
		data: {
			type: Sequelize.INTEGER,
		},

	});

	return Control;
}