const Flight = require('../models/flight.js')

module.exports = {
    index,
    new: newFlight,
    create,
    show
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
  console.log(flight)
  flight.save(function(err){
    // one way to handle errors
    if (err) {
        let testFlight = new Flight();
        let dt = testFlight.departs
        console.log(dt)
        let destDate = dt.toISOString().slice(0, 16);
        return res.render('flights/new', {title: 'Add Flight', destDate});
    }
    // for now, redirect right back to new.ejs
    res.redirect('/flights');
  });
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {title: 'Flight Details', flight})
    });
}