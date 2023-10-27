const mongoose = require('mongoose');

const fuelEntrySchema = new mongoose.Schema({
date: Date,
expenditure: Number,
taxation: Number,
frequency: String,
recency: String,
});

module.exports = mongoose.model('FuelEntry', fuelEntrySchema);