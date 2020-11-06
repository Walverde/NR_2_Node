module.exports = (sequelize, Sequelize) => {


const buscas = sequelize.define('Buscas', {

    setnome: {
        type: Sequelize.STRING
    },
    categoria: {
        type: Sequelize.STRING
    },
    pmin: {
        type: Sequelize.STRING
    },
    pmax: {
        type: Sequelize.STRING
    },
    mensagem: {
        type: Sequelize.STRING
    },
    valordebusca: {
        type: Sequelize.STRING
    }

});


return buscas 


}