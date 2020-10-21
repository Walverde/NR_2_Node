
const db = require('../config/db.config');
const controlercon = db.con;
const cor = require('../settings/cores')


exports.InsertsMqtt = (msn) => {
    console.log(`${cor.FgCyan}Executando do ${cor.FgGreen}controltrack.controller${cor.Reset}`)

    // data = msn.DATA
    data = msn
    var kwha = data.VARMS * data.IARMS * 1
    var kwhb = data.VBRMS * data.IBRMS * 1
    var kwhc = data.VCRMS * data.ICRMS * 1
    var kwht = kwha + kwhb + kwhc


    const hoje = function () {
        // Data de hoje
        var hoje = new Date();
        var dia = hoje.getDate();
        var mes = hoje.getMonth() + 1;
        var ano = hoje.getFullYear();
        // Adcionando um 0, se caso o numero for menor que 9
        var nmes = mes <= 9 ? "0" + mes : mes
        var ndia = dia <= 9 ? "0" + dia : dia
        //Concatenando dados em uma String Formatada. 
        var dateString = `${ano}/${nmes}/${ndia}`
        //Retornando o valor da função. 
        return dateString;
    }


    controlercon.create({

        VARMS: data.VARMS,
        VBRMS: data.VBRMS,
        VCRMS: data.VCRMS,

        IARMS: data.IARMS,
        IARMS: data.IARMS,
        ICRMS: data.ICRMS,

        PTA: data.PTA,
        PTB: data.PTB,
        PTC: data.PTC,

        FPA: data.FPA,
        FPB: data.FPB,
        FPC: data.FPC,

        // Somados...........(Fase de testes, provisorio)
        KWHA: kwha,
        KWHB: kwhb,
        KWHC: kwhc,
        KWHT: kwht,
        data: hoje()
    })

}
