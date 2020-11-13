
// isso vai me ganrantir que somente uma conexão global vai existir. 

// const { con } = require("../back/config/db.config")

// CONEXÃO
async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') // Se existir uma conexão globão, & o estado dela for (!==) diferente de desconectado. Então, se retorna a conxão já existente. 
        return global.connection
    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection({ // vai aguardar terminar isso, para poder proseguir. 
        host: "ddbengenharia.com.br",
        user: 'ddbeng30_scd',
        password: '78985214',
        database: 'ddbeng30_teste'
    })
    console.log("db.js => executando. |  status: Conetado") // só vai executar depois conetar. Mode "ENCADEAR PROMOSES". 
    global.connection = connection
    return connection
}

// SELECT
async function select () {
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM BinDataMinutos;') // vai separar somente as linhas e 
    return rows
}


A solução esta aqui!!!!!!!!!!!!!!!!!!!!!
//https://www.youtube.com/watch?v=2XBWTEbGw4w&feature=youtu.be&ab_channel=LuizTools
// INSERT
async function insertointu(data){
    const conn = await connect()
    await conn.query('INSERT INTO BinDataMinutos set?')
}



// Em caso de ambineteas mais completos, pode se usar o Pool. 

module.exports = { connect, select }