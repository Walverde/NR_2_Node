

const db = require('../config/db.config.js');
const Customer = db.creds;

class controlers {

    create = (dados) => {
        // console.log(dados)
        // Save to MySQL database
        Customer.create({
            setnome: dados.setnome,
            user: dados.user,
            senha: dados.senha,
            categoria: dados.categoria,
        }).then(customer => {
            console.log('\x1b[32m', 'Credencial:', '\x1b[36m', dados.setnome, '\x1b[32m', 'inserida com sucesso! :D ', '\x1b[37m')
        }).catch(err => {
            console.log('\x1b[31m', 'Erro ao inserir dados :(', '\x1b[37m')
        })
    };

    async index() {
        try {
            const users = await Customer.findAll({
                attributes: [
                    'setnome',
                ]
            });
            var xt = users.map((a) => a.setnome)
            // console.log('De dentro',xt)
            return xt
        } catch (err) {
            var errou = console.log("Errou" + err)
            return errou
        }
    }

    Excluir = (itemaserexpluido) => {
        Customer.destroy({
            where: { setnome: itemaserexpluido }
        }).then(() => {
            console.log('\x1b[31m', 'Item,', itemaserexpluido, 'Excluido!', '\x1b[37m')
        }).catch(err => {
            console.log("Erro ao excluir o Item" + err)
        })
    }
    // Update a Customer

    editar = (itemasereditado, setmenu) => {
        const updatecampo = itemasereditado.s_editar
        const newvalue = itemasereditado.valor
        var idset = setmenu.id


        if (updatecampo === `Nome`) {
            Customer.update({
                // updatecampo: `${newvalue}`
                setnome: newvalue
                // updatecampo : newvalue
            },
                { where: { id: idset } }
            ).then(() => {
                console.log('\x1b[32m', 'Credencial:', '\x1b[36m', setmenu.setnome, '\x1b[32m', 'Atualizada com sucesso! :D ', '\x1b[37m')
            }).catch(err => {
                console.log('\x1b[31m', 'Erro ao atualizar dados :(', '\x1b[37m')
            })
            // updatecampo = 'setnome'
        } else if (updatecampo === `Login`) {
            Customer.update({
                // updatecampo: `${newvalue}`
                user: newvalue
                // updatecampo : newvalue
            },
                { where: { id: idset } }
            ).then(() => {
                console.log('\x1b[32m', 'Credencial:', '\x1b[36m', setmenu.setnome, '\x1b[32m', 'Atualizada com sucesso! :D ', '\x1b[37m')
            }).catch(err => {
                console.log('\x1b[31m', 'Erro ao atualizar dados :(', '\x1b[37m')
            })
            // updatecampo = `user`
        } else if (updatecampo === `Senha`) {
            Customer.update({
                // updatecampo: `${newvalue}`
                senha: newvalue
                // updatecampo : newvalue
            },
                { where: { id: idset } }
            ).then(() => {
                console.log('\x1b[32m', 'Credencial:', '\x1b[36m', setmenu.setnome, '\x1b[32m', 'Atualizada com sucesso! :D ', '\x1b[37m')
            }).catch(err => {
                console.log('\x1b[31m', 'Erro ao atualizar dados :(', '\x1b[37m')
            })
            // updatecampo = `senha`
        } else {
            Customer.update({
                // updatecampo: `${newvalue}`
                categoria: newvalue
                // updatecampo : newvalue
            },
                { where: { id: idset } }
            ).then(() => {
                console.log('\x1b[32m', 'Credencial:', '\x1b[36m', setmenu.setnome, '\x1b[32m', 'Atualizada com sucesso! :D ', '\x1b[37m')
            }).catch(err => {
                console.log('\x1b[31m', 'Erro ao atualizar dados :(', '\x1b[37m')
            })
            // updatecampo = `categoria`
        }

        console.log(`ID`, idset)
        console.log(`Controler, CAMPO A SER ATUALIZADO: > `, updatecampo)
        console.log(`Controler, NOVO VALOR: > `, newvalue)
        console.log(`Controler, NOME DA CREDENCIAL: > `, setmenu.setnome)
        // console.log(`novo campo:`, updatecampo)

        
    };


    async returnindex(itemaseratualizado) {
        try {
            const foredit = await Customer.findAll({
                where: { setnome: itemaseratualizado },
                attributes: [
                    'id',
                    'setnome',
                    'user',
                    'senha',
                    'categoria',
                    'createdAt',
                    'updatedAt']
            })

            var dataValues = foredit.map((a) => a.dataValues)

            // console.log('De dentro do Controllers,', dataValues)

            return dataValues

        } catch (error) { console.log('Errou: ' + error) }
    }


}

module.exports = new controlers();