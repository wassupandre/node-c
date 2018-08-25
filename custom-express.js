var express = require("express") // importando modulo express
var load = require("express-load")

module.exports = function(){
    var app = express()
    app.set("view engine", "ejs")
    app.use(express.static('./public'))
    
    load("routes")
        .then("infra")
        .into(app)

    return app
}