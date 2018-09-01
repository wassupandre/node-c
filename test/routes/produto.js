var express = require('../../custom-express')()
var request = require('supertest')(express)

describe('#Produtos controller', function(){

    var limpaTabelas = function(done){
        var conn = express.infra.connectionFactory()
        conn.query('DELETE FROM livros', function(ex,result){
            if(!ex){
                done()
            }
        })
    }
    it('Listagem de produtos json',function(done){
        request.get('/produtos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200,done)
    })

    it('Listagem de produtos html',function(done){
        request.get('/produtos')
        .expect('Content-Type', /html/)
        .expect(200,done)
    })

    beforeEach(function(done){
        limpaTabelas(done)
    })
})

// rodar teste com mocha 
// node_modules/mocha/bin/mocha --recursive