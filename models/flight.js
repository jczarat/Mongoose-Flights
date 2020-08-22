const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'SAN'},
    arrival: Date
})

const flightSchema = new Schema({
    airline: {type: String, enum: ['American', 'Delta', 'Southwest', 'United']},
    airport: {type: String, default: 'DEN', enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo: {type: Number, min: 10, max: 9999, required: true},
    departs: {
        type: Date,
        default: function(){
            const date = new Date();
            return date.setFullYear(date.getFullYear() + 1);
        }
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);