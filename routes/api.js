const express = require('express')
const router = express.Router();
const ticket = require('../models/ticket')

// router.get('/tickets', (req, res, next) => {
//     ticket.find({})
//     .then((tickets) => {
//         res.status(200).send(tickets)
//     })
//     .catch((err) => {
//         console.log('err', err)
//     })
// })

router.get('/tickets', (req, res) => {
    connection((db) => {
        db.collection('tickets')
            .find()
            .toArray()
            .then((tickets) => {
                response.data = tickets;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});


module.exports = router;
