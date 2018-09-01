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

    return app
}