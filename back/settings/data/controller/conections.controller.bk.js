

const db = require('../config/db.config.js');
const Customer = db.creds;
// Post a Customer

// exports.create = (req, res) => {	
// exports.create = (dados) => {
//     console.log(dados)
//     // Save to MySQL database
//     Customer.create({
//         setnome: dados.setnome,
//         user: dados.user,
//         senha: dados.senha,
//         categoria: dados.categoria,
//     }).then(customer => {
//         // Send created customer to client
//         // res.send(customer);
//         console.log('\x1b[32m', ' inseridos com sucesso! :D ', '\x1b[37m')
//     }).catch(err => {
//         console.log("Erro ao inserir dados" + err)
//         // res.status(500).send("Error -> " + err);
//     })
// };
// ////////////////// VOU USAR SOMENTE O FINDaLL NESSE MOMENTO ////////////////////////////////
// // FETCH all Customers
// // exports.findAll = (req, res) => {
// exports.findAll = (res) => {
//     Customer.findAll({
//         // offset: 123456,
//         limit: 5,
//         where: {},
//         order: [['createdAt', 'DESC']],
//         attributes: [
//             // sequelize.fn("MAX", sequelize.col("VARMS")),
//             // 'id',
//             'setnome',
//             // 'user',
//             // 'senha',
//             // 'categoria',
//             // 'createdAt',
//             // 'updatedAt'
//         ],
//     }).then(customers => {
//         console.log("sucesso")
//         xt = customers.map((a) => a.setnome)
//         console.log('TX printing', xt)
//         // }).then(function(customers) {
//         // customers = customers || [];
//         customers = xt
//         // customers.test((object) => console.log("Da query:",object.setnome))
//         // Send all customers to Client
//         // res.send(customers);
//         // res = customers
//         // console.log('imprimindo RES', res)


//         // console.log('imprimindo RES', customers)


//         res.send(customers);

//         // findAll.json(customers) 


//         // this.res = customers

//         exports.xt

//         return xt
//     }).then(dadosarray => {
//         const inquirer = require('inquirer');
//         inquirer
//             .prompt([{
//                 type: 'list', // Escolha 01
//                 name: 'conf_editar',
//                 message: 'Editar Credenciais',
//                 choices: dadosarray // Array de Credenciais do Banco de dados. 
//                 // choices: listload
//                 // choices: jloads
//             }])
//     }).catch(err => {
//         // respo.status(500).send("Error -> " + err);
//         res = err
//         return res
//     })
//     // return this.res.test((object) => console.log("Da query:",object.setnome))
//     return this.xt
// };

////////////////////////////FINAL DO FIND_ALL/////////////////////////////////////////////////////////





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



    /////////////////////////////

    // // Find a Customer by Id
    // exports.findById = (req, res) => {	
    // 	Customer.findById(req.params.customerId).then(customer => {
    // 		res.send(customer);
    // 	}).catch(err => {
    // 		res.status(500).send("Error -> " + err);
    // 	})
    // };

    // // Find Customers by Age
    // exports.findByAge = (req, res) => {
    //     Customer.findAll({
    //         where: {
    //             age: req.params.age
    //         }
    //     }).then(
    //         customers => {
    //             res.send(customers)
    //         }
    //     ).catch(err => {
    //         res.status(500).send("Error -> " + err);
    //     })
    // };

    // Update a Customer
    // exports.update = (req, res) => {
    //     var customer = req.body;
    //     const id = req.params.customerId;
    //     Customer.update({
    //         name: req.body.name,
    //         age: req.body.age,
    //         active: req.body.active
    //     },
    //         { where: { id: req.params.customerId } }
    //     ).then(() => {
    //         res.status(200).send(customer);
    //     }).catch(err => {
    //         res.status(500).send("Error -> " + err);
    //     })
    // };

}

module.exports = new controlers();