var app = require("./custom-express")()
var http = require('http').Server(app)
var io = require('socket.io')(http)
app.set('io',io)
var server = http.listen("3000", function(req, res){
   
    console.log("Servidor Rodando na porta 3000")
})