const mocha = require('mocha');
const assert = require('assert')
const ticket = require('../models/ticket.js')

describe('finding record', () => {

    beforeEach((done) => {
        var tckt = new ticket({
            title:"tim hawkins",
            description:"pink with a little bit of wierd in it",
            status: ['open'],
            dateCreated: new Date,
            lastModified: new Date,
            department: ['billing']
        })
    
        tckt.save().then(() => {
            assert(tckt.isNew === false);
            done();
        })
    })
    
    it('gets one record', (done) => {
        ticket.findOne({title: "tim hawkins"}).then((res) => {
            assert(res.title === "tim hawkins")
            done()
        })
    });

   

})