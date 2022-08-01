
const chaiHttp =require('chai-http');
const chai = require('chai');
chai.use(chaiHttp);
chai.should();
const app = require('../app');
require("../models/Item");
app.use(require('../routes'));


describe('some tests', () => {
    it('should return Hello World!', (done) => {
       chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql("Hello World!");
                done()
            })
    });
    it('should have a 404 status code', (done) => {

        chai.request(app)
        .get('/invalid')
        .end((err, res) => {
            res.should.have.status(404);
            done()
        })
     });
     it('should create an item', (done) => {
        chai.request(app)
            .post('/api/items/')
            .set('content-type', 'application/json')
            .send({name: "test"})
            .end((err, res, body) => {
                if(err){
                    done(err)
                } else {
                    res.should.have.status(200);
                    done();
                }
            })
    });
    it('should not create an item with an existing name', (done) => {
        chai.request(app)
            .post('/api/items/')
            .set('content-type', 'application/json')
            .send({name: "test"})
            .end((err, res, body) => {
                if(err){
                    done(err)
                } else {
                    res.should.have.status(400);
                    done();
                }
            })
    });
});



