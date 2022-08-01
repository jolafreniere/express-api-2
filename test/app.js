const request = require('supertest');
//const app = require('../app');
const url = "http://localhost:3000"
describe('some tests', () => {
    it('should return Hello World!', () => {
       return request(url)
            .get('/')
            .expect(200)
            .expect('Hello World!')
            .expect('Content-Type', /text/);
    });
    it('should have a 404 status code', () => {
        return request(url)
             .get('/invalid')
             .expect(404)
     });
    //  it('should create an item', () => {
    //     return request("http://localhost:3000")
    //          .post("/api/items/")
    //          .set('Content-Type', 'application/json')
    //          .send({name: "test"})
    //          .expect(200)
    //  });
});



