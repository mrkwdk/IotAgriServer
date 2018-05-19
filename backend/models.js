var mongoose = require('mongoose');

const Image = mongoose.model('Image', {
  date: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  }
});

const SoilHumidty = mongoose.model('SoilHumidty', {
  value: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = { SoilHumidty: SoilHumidty }
//module.exports = { Image: Image, SoilHumidty: SoilHumidty }
