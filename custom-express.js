var express = require("express") // importando modulo express
var load = require("express-load")
var bodyParser = require("body-parser")
var expressValidator = require("express-validator")

module.exports = function(){
    var app = express()
    app.set("view engine", "ejs")
    app.use(express.static('./public'))
    app.use(bodyParser.urlencoded())
    app.use(bodyParser.json())
    app.use(expressValidator())
    
    load("routes")
        .then("infra")
        .into(app)

    app.use(function(req,res,next){
        console.log('Recurso nao encontrado: ' + req.originalUrl)
        res.format({
            html: function () {
                res.status(404).render('errors/404')
            },
            json: function () {
                res.status(404).send(errors)
            }
        })
    })
    app.use(function(error,req,res,next){
        console.log('Erro no middleware')
        console.error(error)
        res.format({
            html: function () {
                res.status(500).render('errors/500')
            },
            json: function () {
                res.status(500).send(errors)
            }
        })
    })
    return app
}