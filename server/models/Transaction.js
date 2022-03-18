const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  sale: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sale',
  },
  amountPaid: {
    type: Number,
  },
  balance: {
    type: Number,
  },
  totalPaid: {
    type: Number,
  },
  date: {
    type: Date,
  },
  paymentInfo: {
    paymentType: {
      type: String,
    },
    accountNumber: {
      type: String,
    },
  },
  receipt: {
    type: String,
  },
});

module.exports = mongoose.model('transaction', TransactionSchema);
