const mongoose = require('mongoose');

const SubscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('subscribe', SubscribeSchema);
