const mongoose = require('mongoose');
const Schema = mongoose.Schema;

destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['NRT', 'LHR', 'MEX', 'HNL', 'BCN']
    },
    arrival: Date
})

const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Alaskan'],
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'LAX'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            const today = new Date()
            return today.setFullYear(today.getFullYear() + 1)
        }
    },
    destinations: [destinationSchema]
});


module.exports = mongoose.model('Movie', flightSchema);