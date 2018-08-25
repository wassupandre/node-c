function produtoDao(connection){
    this._connection = connection
}
produtoDao.prototype.lista = function(callback){
    this._connection.query('SELECT * FROM livros', callback)
}

module.exports = function(){
    return produtoDao
}
