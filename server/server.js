//////////////////////real server/////////////////////////////////////////////////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv').config();

const app = express();
const api = require('../routes/api')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')))

app.use('/api', api)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/angular-ticket/index.html'));
})

const port = 3535;



app.listen(port, () => {console.log(`app is listening on port ${port}`)})

const mongoose = require('mongoose')
//es6 promises
mongoose.Promise = global.Promise

const dbName = 'ticketApp'

//connect first before test


mongoose.connect(`mongodb://localhost/${dbName}`);



mongoose.connection.once('open', () => {
    console.log(`connected to database: "${dbName}"`);
    
}).on('error', (err) => {
    console.log('connection error', err)
})


/////////////////////////////////////////////////////////////////////////////////////
