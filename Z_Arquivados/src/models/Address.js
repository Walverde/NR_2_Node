
// Esse aquivo sera resposavel por inserir dados dentro da table, criado a partir do arquivo do migrations. em: /src/databases/migrations/arquvo.js... 


const { Model, DataTypes } = require('sequelize');

// O campo Address, será exportado para ser usado no arquivo de rotas (em: /src/routes.js), atravez do index. (em: /src/databases/index.js) 

class Address extends Model{
    static init(sequelize){
        super.init({
            cep: DataTypes.STRING,
            rua: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            // user_id: Datatypes.INTEGER,
            // email: DataTypes.STRING
        },{
            sequelize
        })
    } // criando a associação para os endereços. 
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})

    }

}


module.exports = Address; // Exportando modelo de tabla User. 