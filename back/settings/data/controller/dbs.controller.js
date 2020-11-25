
const cor = require('../../cores')
const db = require('../config/db.config.js');
const Busca = db.busca;

class controlers {
    async create(dados) {
        try {// Insere os dados no Busca
            Busca.create({
                setnome: dados.setnome,
                categoria: dados.categoria,
                pmin: dados.pmin,
                pmax: dados.pmax,
                mensagem: dados.mensagem,
                valordebusca: dados.valordebusca
            }).then(busca => {
                // console.log('\x1b[32m', 'Configurações de busca:', '\x1b[36m', dados.setnome, '\x1b[32m', 'inserida com sucesso! :D ', '\x1b[37m')
                console.log(`${cor.FgGreen}'Configurações de busca: ${cor.FgYellow}${dados.setnome}${cor.FgGreen}, inserida com sucesso!${cor.Reset}`)
            })
        }
        catch (err) {
            console.log(`${cor.FgRed}Erro ao inserir dados :( ${cor.FgYellow}${err}${cor.Reset}`)
        }
    };

    async index() {
        try {
            // console.log(`${cor.FgRed}INDEX${cor.Reset}`)
            const users = await Busca.findAll({
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

    async Excluir(itemaserexpluido) {
        try {
            Busca.destroy({
                where: { setnome: itemaserexpluido }
            }).then(() => {
                console.log('\x1b[31m', 'Item,', itemaserexpluido, 'Excluido!', '\x1b[37m')
            }).catch(err => {
                console.log("Erro ao excluir o Item" + err)
            })
        } catch (err) {
            console.log('Função exluir, falhou: ', err)
        }
    }


    // Update a Busca

    async editar(itemasereditado, setmenu) { // Menu de atualização de dados do grupo de busca. 

        try {
            const updatecampo = itemasereditado.s_editar
            const newvalue = itemasereditado.valor
            var idset = setmenu.id
            if (updatecampo === `Nome`) {
                Busca.update({
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
            } else if (updatecampo === `Categoria`) {
                Busca.update({
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
                // updatecampo = `user`
            } else if (updatecampo === `Pmin`) {
                Busca.update({
                    // updatecampo: `${newvalue}`
                    pmin: newvalue
                    // updatecampo : newvalue
                },
                    { where: { id: idset } }
                ).then(() => {
                    console.log('\x1b[32m', 'Credencial:', '\x1b[36m', setmenu.setnome, '\x1b[32m', 'Atualizada com sucesso! :D ', '\x1b[37m')
                }).catch(err => {
                    console.log('\x1b[31m', 'Erro ao atualizar dados :(', '\x1b[37m')
                })
                // updatecampo = `senha`
            } else if (updatecampo === `Pmax`) {
                Busca.update({
                    // updatecampo: `${newvalue}`
                    pmax: newvalue
                    // updatecampo : newvalue
                },
                    { where: { id: idset } }
                ).then(() => {
                    console.log('\x1b[32m', 'Credencial:', '\x1b[36m', setmenu.setnome, '\x1b[32m', 'Atualizada com sucesso! :D ', '\x1b[37m')
                }).catch(err => {
                    console.log('\x1b[31m', 'Erro ao atualizar dados :(', '\x1b[37m')
                })
                // updatecampo = `senha`
            } else if (updatecampo === `Mensagem`) {
                Busca.update({
                    // updatecampo: `${newvalue}`
                    mensagem: newvalue
                    // updatecampo : newvalue
                },
                    { where: { id: idset } }
                ).then(() => {
                    console.log('\x1b[32m', 'Credencial:', '\x1b[36m', setmenu.setnome, '\x1b[32m', 'Atualizada com sucesso! :D ', '\x1b[37m')
                }).catch(err => {
                    console.log('\x1b[31m', 'Erro ao atualizar dados :(', '\x1b[37m')
                })
                // updatecampo = `senha`
            }
            else if (updatecampo === `Valor de busca`) {
                console.log("Executando UPDATE em >- valordebusca")
                Busca.update({
                    // updatecampo: `${newvalue}`
                    valordebusca: newvalue
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
        } catch (err) { console.log(`Operação editar falhou, com o erro:${err}`) }

    };
    async returnindex(itemaseratualizado) {
        try {
            const foredit = await Busca.findAll({
                where: { setnome: itemaseratualizado },
                attributes: [
                    'id',
                    'setnome',
                    'categoria',
                    'pmin',
                    'pmax',
                    'mensagem',
                    'valordebusca',
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