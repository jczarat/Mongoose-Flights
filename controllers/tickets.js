const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        console.log(flight)
        res.render('tickets/new', {title: 'Add Ticket', flight})
    })
}

// function create (req, res){
//     Flight.findById(req.params.id, function(err, flight){
        
//     })
// }

function create (req, res){
    req.body.flight = req.params.id
    console.log('Hello World')
    Ticket.create(req.body)
    .then(()=> {res.redirect(`/flights/${req.params.id}`)})
}