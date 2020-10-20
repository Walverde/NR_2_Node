// importando Express
const express = require('express'); 
// importando aquivo de controle. (em: src/controllers)
// arquivos esses que serão responssaveis pelo metodos de buscar no banco de dados. 
const usercontol = require('./controllers/UserController') 
const AddController = require('./controllers/AddController')

const routes = express.Router(); // 


// routes.get('/',(req, res)=>{
//     return res.json({exmeplo:'Exportando de Routes'})
// })

// routes.get('/publicar',(req, res)=>{
//     return res.json({exmeplo:'Pagina de Enviar'})
// })


// routes.post('/users',(req, res)=>{
//     return res.json({exmeplo:'Pagina de Enviar'})
// })

// exemplo de rota para cadastro de novas linhas. (Sera usado com o pacote json do Mqtt)
routes.post('/user', usercontol.store); 

            // aqui, assim como no campo acima, tbm cadastra, poprem com o adicional da função de relação de dados. 
routes.post('/user/:user_id/addresses', AddController.store); 
            // Como cada user, vai esta atrelado a um endereço, então o user tera de ser informado antes de ser incerido o endereço. 

// exemplo de rota para Busca. Via Index, metodo do controler. 
routes.get('/user', usercontol.index); 

// exportando as rotas criadas. 
module.exports = routes; 