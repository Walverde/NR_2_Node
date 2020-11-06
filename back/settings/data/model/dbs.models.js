// const sequelize = require("Sequelize")
// const { Sequelize } = require("sequelize/types")

module.exports = (sequelize, Sequelize) => {

const Cads = sequelize.define('conections', {
    setnome: {
        type: Sequelize.STRING
    },
    host: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    },
    categoria: {
        type: Sequelize.STRING
    }

});


return Cads 
}
// module.exports = models