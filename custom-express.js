var express = require("express") // importando modulo express
// var meumodulo = require("./meumodulo") // importando meu modulo(pasta ou arquivo)

module.exports = function(){
    var app = express()
    app.set("view engine", "ejs")
    require("./routes/produtos")(app)
    return app
}