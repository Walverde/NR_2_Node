module.exports ={
    dialect:'mysql',
    host: '192.168.0.31',
    // host: 'localhost',
    username:'wal',
    password:'0101',
    // database:'exemplo',
    database:'Node',
    define:{
        timestamps: true, // gardar com timestamp
        underscored: true, // separar com _
    }
}