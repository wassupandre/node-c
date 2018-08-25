var express = require("express") // importando modulo express

module.exports = function(){
    var app = express()
    app.set("view engine", "ejs")
    app.use(express.static('./public'))
    require("./routes/produtos")(app)
    return app
}