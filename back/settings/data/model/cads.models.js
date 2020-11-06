// const sequelize = require("Sequelize")
// const { Sequelize } = require("sequelize/types")

module.exports = (sequelize, Sequelize) => {

const Cads = sequelize.define('Credenciais', {
    setnome: {
        type: Sequelize.STRING
    },
    user: {
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