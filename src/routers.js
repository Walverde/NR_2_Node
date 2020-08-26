const express = require('espress');
const routes = express.Router();

routes.get('/',(req, res)=>{
    return res.json({})
})

module.exports = routes;