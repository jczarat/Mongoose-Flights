const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    delete: deleteFlight
}

function index(req, res){
    //this is going to send all flights data to the flights index view
    Flight.find({}, function(err, flights){
        res.render('flights/index', {title: 'All Flights', flights})
    })
}

function newFlight(req, res){
    let testFlight = new Flight();
    let dt = testFlight.departs
    var destDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', { title: 'Add Flight', destDate})
}

function create(req, res){
  const flight = new Flight(req.body);
  flight.save(function(err){
    // one way to handle errors
    if (err) {
        let testFlight = new Flight();
        let dt = testFlight.departs
        let destDate = dt.toISOString().slice(0, 16);
        return res.render('flights/new', {title: 'Add Flight', destDate});
    }
    // for now, redirect right back to new.ejs
    res.redirect('/flights');
  });
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {title: 'Flight Details', flight, tickets})
        });
    });
}

function deleteFlight(req, res){
    Flight.findByIdAndDelete(req.params.id, function (err) {
        if(err) console.log(err);
        res.redirect('/flights');
      });
}