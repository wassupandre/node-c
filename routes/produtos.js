
module.exports = function (app) {
    app.get("/lista", function (req, res) {
        var connection = app.infra.connectionFactory()
        var produtoDao = new app.infra.produtoDao(connection)
        connection.query("SELECT * FROM livros", function (error, result, fields) {
            res.render("produtos/lista", { lista: result })
        })
        connection.end()
    })

    app.get("/produtos/form", function (req, res) {
        res.render("produtos/form")
    })

    app.post("/produtos", function (req, res) {
        var livro = req.body
        req.assert('titulo', 'Titulo deve ser preenchido').notEmpty()
        req.assert('preco', 'Preco deve ser um numero').isFloat()
        var errors = req.validationErrors()

        if (errors) {
            console.log('Há erros na validaçao')
            res.format({
                html: function () {
                    res.status(400).render('produtos/form')
                },
                json: function () {
                    res.status(400).send(errors)
                }
            })
            return
        }

        var connection = app.infra.connectionFactory()
        var produtos = new app.infra.produtoDao(connection)

        produtos.salva(livro, function (exception, result) {
            res.redirect("/lista")
        })
    })

    app.get("/produtos", function (req, res) {
        var connection = app.infra.connectionFactory()
        var produtos = new app.infra.produtoDao(connection)
        produtos.lista(function (error, result, fields) {
            res.format({
                html: function () {
                    res.render("produtos/lista", { lista: result })
                },
                json: function () {
                    res.json(result)
                }
            })

        })
    })
    app.get("/produtos/:id", function (req, res) {
        var connection = app.infra.connectionFactory()
        var produtoDao = new app.infra.produtoDao(connection)
        connection.query("SELECT * FROM livros WHERE id = '" + req.params.id + "'", function (error, result, fields) {
            res.render("produtos/lista", { lista: result })
        })
        connection.end()
    })
}