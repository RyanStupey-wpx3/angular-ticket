const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    title:String,
    description:String,
    status:{ type: String, enum: ['Open', 'Closed', 'On Hold']},
    dateCreated:Date,
    lastModified:Date,
    department: { type: String, enum: ['Billing', 'Sales', 'Customer Service', 'Retention', 'Scheduling']},
    });

    const ticket = mongoose.model('ticket', TicketSchema)

    module.exports = ticket