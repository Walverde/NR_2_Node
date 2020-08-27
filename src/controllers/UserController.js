const User = require('../models/User')

module.exports = {
    async store(req,res){
        const { name, email} = req.body;
        const user = await User.create({ name, email}) // vai criar os campos. 
        return res.json(user) // vai responder o usuario user, em formato json. 
    }
}