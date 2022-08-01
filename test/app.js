
const chaiHttp =require('chai-http');
const chai = require('chai');
chai.use(chaiHttp);
chai.should();
const app = require('../app');
app.use(require('../routes'));
require("../models/Item");
const mongoose = require('mongoose');

describe('Route tests', () => {
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
        const Item = mongoose.model("Item");
        Item.deleteMany({}).then(() => {
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
    })
    it('should not create an item that already exists', (done) => {
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
    })
});