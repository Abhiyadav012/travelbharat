const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  placeName: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bestTimeToVisit: {
    type: String,
  },
  entryFee: {
    type: String,
  },
  timings: {
    type: String,
  },
  mapLink: {
    type: String,
  },
  image: {
    type: String,
  }
});

module.exports = mongoose.model("Place", placeSchema);