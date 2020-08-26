// const { default: router } = require("../views_vue/src/router");

// const express = require('express'); // importando express. 
const routes = require('./routes'); // importando arquivo de rotas. 

// const app = express(); // instanciando Express. 


const express = require('express');
const bodyParser = require('body-parser');
// const router = express.Router();

const port = 4000

// let app = express();
const app = express();




app.use(express.json()); // para lidar com aquivos json tbm, sera nescessario no MQTT
app.use(routes); // usado as rotas no Express


// Servidor na porta... onde [port] é a porta setada acima ↑, e [function] é a função que exibirar no console a messagem de funcionamento. 

app.listen(port, function(){
  console.log("Rodando na porta:"+ port)
});