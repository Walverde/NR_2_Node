// Esse aquivo ira lidar com as requisições e retornar a o pacote json 


//Importado os modelos de cadatros, ja setados, em modelos. 
const Address = require('../models/Address')
const User = require('../models/User')


// aqui sea excrito todos oss metodos querys para o banco de dados. 

module.exports = {
    //criar postagem.
    async store(req, res){ // esse objeto [store] sera requisitado em rotas. 
        const { user_id } = req.params; //vai vim do URL. 
        const { cep, rua, numero } = req.bory; // vai vim no pacote json. 
        const user = await User.findByPk(user_id); // vai procurar em Users o Pk. 
        //se caso não for encontrado, irá setorna esse erro. ↓
        if (!user){ 
            return res.status(400).json({ error: 'User not found'})
        }  
        // se encontrado o codigo prossegue criando um endereço. 

        const address = await Address.create({ 
            cep, 
            rua, 
            numero,
        }) // vai inserir os campos. onde o [create] é o medoto ultilizado. 
        return res.json(address) // vai responder o usuario user, em formato json. 
    },
    //procurar postagem. (Vai ser usado para plotar frafico depois)
    async index(req, res){ // esse objeto [index] sera requisitado em rotas.
        const address = await Adress.findAll(); // vai procurar todos os resultados para os parametros recebidos.
        return res.json(address); // vai responder o usuario user, em formato json.
    }
}

//obs: [Adress], é uma instancia do arquivo Adress.js
//      [adress], é um objeto dentro deste aquivo. 