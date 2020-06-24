var supertest = require('supertest');
var chai = require('chai');
var should = require('should');
var assert = require('assert');
var app = require('../app');
const mongoose = require('mongoose');

var request = supertest(app);
var expect = chai.expect;

before(function (done) {
    mongoose.connection.on('open', done)
});

describe('GET /generate-changing-life-quote', function(){
    it('should return code 200',function(done){
        request.get('/api/v1/generate-changing-life-quote')
        .expect(200)
        .end(function(err,res){
            if(err) return done (err)
            done(err) 
        });
    });

    it('should return JSON Content-Type application/Json',function(done){
        request.get('/api/v1/generate-changing-life-quote')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err)
            done(err) 
        });
    });

    it('should return the message: ',function(done){
        request.get('/api/v1/generate-changing-life-quote')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) return done (err)
            should.not.exist(err);
            should.exist(res);
            res.body.should.be.an.Object;
            should.exist(res.body);
            //assert.equal('ERROR, The number must be between 0 and 100',res.body.result);
            done();
        });
    });

});