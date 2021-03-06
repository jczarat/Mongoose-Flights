const Flight = require('../models/flight')

module.exports = {
    create,
    delete: deleteDest
}

function create (req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        })
    })
}

//so far this is finding the correct flight based on the destination, still need to delete the destiation
function deleteDest(req, res) {
    Flight.findById(req.params.flight, function(err, flight){
        const index = flight.destinations.findIndex(dest => dest._id == req.params.dest)
        flight.destinations.splice(index, 1)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
}