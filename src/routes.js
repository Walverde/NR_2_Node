const express = require('express'); // importando Express
const routes = express.Router(); // 

routes.get('/',(req, res)=>{
    return res.json({exmeplo:'Exportando de Routes'})
})

routes.get('/publicar',(req, res)=>{
    return res.json({exmeplo:'Pagina de Enviar'})
})
routes.get('/inscrever',(req, res)=>{
    return res.json({exmeplo:'Pagina de Enviar'})
})


module.exports = routes; // exportando as rotas criadas. 