// Esse aquivo ira lidar com as requisições e retornar a o pacote json 

const User = require('../models/User')

// aqui sea excrito todos oss metodos querys para o banco de dados. 

module.exports = {
    async store(req,res){ // esse objeto [store] sera requisitado em rotas. 
        const { name, email} = req.body;
        const user = await User.create({ name, email }) // vai criar os campos. onde o [create] é o medoto ultilizado. 
        return res.json(user) // vai responder o usuario user, em formato json. 
    },
    async index(req, res){ // esse objeto [index] sera requisitado em rotas.
        const user = await User.findAll(); // vai procurar todos os resultados para os parametros recebidos. 
        return res.json(users); // vai responder o usuario user, em formato json.
    }
}