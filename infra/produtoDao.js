function produtoDao(connection){
    this._connection = connection
}
produtoDao.prototype.lista = function(callback){
    this._connection.query('SELECT * FROM livros', callback)
}

produtoDao.prototype.salva = function(livro,callback){
    this._connection.query("INSERT INTO livros SET ?", livro,callback)
}

module.exports = function(){
    return produtoDao
}
