var mysql = require("mysql")
function createConnection(){
    var databaseName = 'casadocodigo'

    if(process.env.NODE_ENV == 'test'){
        databaseName = 'casadocodigo_teste'
    }
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: databaseName
    })
}
module.exports = function(){
    return createConnection
}