const express = require('express'); // importando Express

const usercontol = require('./controllers/UserController')

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


routes.post('/users', usercontol.store);

module.exports = routes; // exportando as rotas criadas. 