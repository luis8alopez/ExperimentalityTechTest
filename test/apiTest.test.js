const supertest = require('supertest');
const app = require('../config/server');
const mongoose = require('mongoose');

const server = supertest(app);
const MONGOURI = process.env.MONGOURI;

describe('Api Test', () => {
    beforeAll(async () => {
        const url = MONGOURI;
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

        it('should return status code 201', () => {
            expect(response.status).toBe(201);
        });

        it('should return _id in body', () => {
            expect(response.body).toHaveProperty('_id');
        });
        it('should return quote in body', () => {
            expect(response.body).toHaveProperty('quote');
        });
        it('should return image in body', () => {
            expect(response.body).toHaveProperty('image');
        });
    });

    describe('Get Quote', () => {
        let response;
        beforeAll(async () => {
            try {
                response = await server.get('/api/v1//get-record-by-id/5ef273b6c3108051e9782555');
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
        it('should return quote in body', () => {
            expect(response.body).toHaveProperty('quote');
        });
        it('should return image in body', () => {
            expect(response.body).toHaveProperty('image');
        });

        it('should  return the selected quote', () => {
            expect(response.body.quote).toBe('Dancing is silent poetry.');
        });
    })

    describe('Delete a quote', () => {
        let response;
        let quote
        beforeAll(async () => {
            try {
                quote = await server.post('/api/v1/generate-changing-life-quote');
                response = await server.delete(`/api/v1/delete-record-by-id/${quote.body._id}`);
            } catch (err) {
                throw err;
            }
        });

        it('should return status code 200', () => {
            expect(response.status).toBe(200);
        });

        it('should return message in body', () => {
            expect(response.body).toHaveProperty('message');
        });

        it('should return the deleted message', () => {
            expect(response.body.message).toBe('Quote deleted succesfully');
        });
    })
})