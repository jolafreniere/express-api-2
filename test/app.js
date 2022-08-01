const request = require('supertest');
const app = require('../app');

describe('app.js', () => {
    it('should return Hello World!', () => {
       return request(app)
            .get('/')
            .expect(200)
            .expect('Hello World!')
            .expect('Content-Type', /text/);
    });
    it('should have a 404 status code', () => {
        return request(app)
             .get('/invalid')
             .expect(404)
     });
});

