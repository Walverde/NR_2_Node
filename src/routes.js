const express = require('express'); // importando Express
const routes = express.Router(); // 
// const

routes.get('/',(req, res)=>{
    return res.json({exmeplo:'Exportando de Routes'})
})

routes.get('/publicar',(req, res)=>{
    return res.json({exmeplo:'Pagina de Enviar'})
})


routes.post('/users',(req, res)=>{
    return res.json({exmeplo:'Pagina de Enviar'})
})


module.exports = routes; // exportando as rotas criadas. 