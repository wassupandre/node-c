var http = require("http")

var porta = "3001"
var ip = "localhost"
http.createServer(function(req, res){
    res.end("<h1>Recebendo request!</h1>")
}).listen(porta, ip)
console.log('Servidor rodando na porta ' + porta)
