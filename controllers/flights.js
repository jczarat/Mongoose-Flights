const Flight = require('../models/flight.js')

module.exports = {
    index,
    new: newFlight,
    create
}

function index(req, res){
    //this is going to send all flights data to the flights index view
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights})
    })
}

function newFlight(req, res){
    res.render('flights/new', { title: 'Add Flight' })
}

function create(req, res){
  const flight = new Flight(req.body);
  console.log(flight)
  flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render('flights/new');
    // for now, redirect right back to new.ejs
    res.redirect('/flights');
  });
}