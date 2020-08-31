// Esse aquivo ira lidar com as requisições e retornar a o pacote json 

const Save = require('../models/Save')

// aqui sea excrito todos oss metodos querys para o banco de dados. 

module.exports = {
    //criar postagem.
    async store(dd,ddd){ // esse objeto [store] sera requisitado em rotas. 
        dd = j.name;
        ddd = j.email;
       // const { name, email} = req.body;
        const save = await Save.create({ name, email }) // vai criar os campos. onde o [create] é o medoto ultilizado. 
        return res.json(save) // vai responder o usuario user, em formato json. 
    },
    //procurar postagem. (Vai ser usado para plotar frafico depois)
    async index(req, res){ // esse objeto [index] sera requisitado em rotas.
        const save = await Save.findAll(); // vai procurar todos os resultados para os parametros recebidos.
        return res.json(save); // vai responder o usuario user, em formato json.
    }
}