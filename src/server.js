// const { default: router } = require("../views_vue/src/router");

const express = require('express') // importando express. 
const routes = require('./routers') // importando arquivo de rotas. 

const app = express(); // instanciando Express. 





app.use(express.json()); // para lidar com aquivos json tbm, sera nescessario no MQTT
app.use(routes); // usado as rotas. 


// Servidor na porta 4000
const app = express();
app.listen(4000);