module.exports = function(app){
    app.get("/produtos", function(req, res){
        var mysql = require("mysql")
        var conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: "casadocodigo"
        })
        conn.query("SELECT * FROM livros", function(error, result, fields){
            res.render("produtos/lista", {lista:result})
        })
    })
}