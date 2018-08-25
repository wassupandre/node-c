
module.exports = function(app){
    app.get("/lista", function(req, res){
        var connection = app.infra.connectionFactory()
        var produtoDao = new app.infra.produtoDao(connection)
        connection.query("SELECT * FROM livros", function(error, result, fields){
            res.render("produtos/lista", {lista:result})
        })
        connection.end()
    })
}