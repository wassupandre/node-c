var express = require("express")

var app = express()

app.set("view engine", "ejs")

app.get("/produtos", function(req, res){
    res.render("produtos/lista")
    console.log("Lista de produtos")
})

var server = app.listen("3001", function(req, res){
    console.log("Servidor Rodando na porta 3001")
})