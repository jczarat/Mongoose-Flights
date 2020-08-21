const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
});

module.exports = mongoose.model('Flight', flightSchema);