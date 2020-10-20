const { Model, DataTypes } = require('sequelize');

class Save extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        },{
            sequelize
        })
    }

}


module.exports = Save; // Exportando modelo de tabla User. 