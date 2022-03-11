const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'community',
  },
  sale: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sale',
  },
  plots: {
    type: String,
  },
  lots: [
    {
      lot: {
        type: String,
        required: true,
      },
    },
  ],
  documents: [
    {
      document: {
        type: String,
      },
      src: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model('portfolio', PortfolioSchema);
