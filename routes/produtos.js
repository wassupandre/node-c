var connectionFactory = require("../infra/connectionFactory")

module.exports = function(app){
    app.get("/lista", function(req, res){
        var conn = connectionFactory()
        conn.query("SELECT * FROM livros", function(error, result, fields){
            res.render("produtos/lista", {lista:result})
        })
        conn.end()
    })
}