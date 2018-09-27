const mocha = require('mocha');
const assert = require('assert')
const ticket = require('../models/ticket.js')

describe('saving record', () => {
    
    it('saves a record to the db', (done) => {
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
    });

   

})