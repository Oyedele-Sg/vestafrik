const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'community',
  },
  plots: {
    type: Number,
  },
  lots: [
    {
      lot: {
        type: String,
        required: true,
      },
    },
  ],
  totalCost: {
    type: Number,
  },
  completePayment: {
    type: Boolean,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model('sale', SaleSchema);
