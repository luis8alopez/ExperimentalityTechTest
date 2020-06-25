var supertest = require('supertest');
var app = require('../config/server');
const mongoose = require('mongoose');

var server = supertest(app);



describe('Api Test', () => {
    beforeAll(async () => {
        const url = "mongodb+srv://root:root@technicaltest.fcvqp.mongodb.net/dllo?retryWrites=true&w=majority";
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    describe('Create a quote', () => {
        let response;
        beforeAll(async () => {
            try {
                response = await server.post('/api/v1/generate-changing-life-quote');
            } catch (err) {
                throw err;
            }
        });

        it('should return status code 200', () => {
            expect(response.status).toBe(200);
        });

        it('should return _id in body', () => {
            expect(response.body).toHaveProperty('_id');
        });
        it('should  return quote in body', () => {
            expect(response.body).toHaveProperty('quote');
        });
        it('should  return image in body', () => {
            expect(response.body).toHaveProperty('image');
        });
    })
})



// describe('GET /generate-changing-life-quote', function () {
//     it('should return code 200', function (done) {
//         request.get('/api/v1/generate-changing-life-quote')
//             .expect(200)
//             .end(function (err, res) {
//                 if (err) return done(err)
//                 done(err)
//             });
//     });

//     it('should return JSON Content-Type application/Json', function (done) {
//         request.get('/api/v1/generate-changing-life-quote')
//             .expect(200)
//             .expect('Content-Type', /json/)
//             .end(function (err, res) {
//                 if (err) return done(err)
//                 done(err)
//             });
//     });

//     it('should return the message: ', function (done) {
//         request.get('/api/v1/generate-changing-life-quote')
//             .expect(200)
//             .expect('Content-Type', /json/)
//             .end(function (err, res) {
//                 if (err) return done(err)
//                 should.not.exist(err);
//                 should.exist(res);
//                 res.body.should.be.an.Object;
//                 should.exist(res.body);
//                 //assert.equal('ERROR, The number must be between 0 and 100',res.body.result);
//                 done();
//             });
//     });

// });