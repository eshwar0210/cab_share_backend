const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: {type:String , required : true},
    fromLocation: { type: String, required: true },
    toLocation: { type: String, required: true },
    departureTime: { type: String, required: true },
    date: { type: Date, required: true },
    numberOfPersons: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
});

const Journey = mongoose.model('Journey', journeySchema);

module.exports = Journey;
