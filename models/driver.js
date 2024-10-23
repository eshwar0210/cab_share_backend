const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  vehicleName: {
    type: String,
    required: true
  },
  vehicleCapacity: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Driver', DriverSchema);
