const mongoose = require('mongoose')
//es6 promises
mongoose.Promise = global.Promise

const dbName = 'ticketApp'

//connect first before test
before(function(done){

mongoose.connect(`mongodb://localhost/${dbName}`);

mongoose.connection.once('open', () => {
    console.log(`connected to database: "${dbName}"`);
    done()
}).on('error', (err) => {
    console.log('connection error', err)
})

});

// drops database collection before each test

beforeEach((done) => {
    mongoose.connection.collections.tickets.drop(() => {
        done()
    })
})


    