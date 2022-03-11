const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: [
    {
      feature: {
        type: String,
      },
    },
  ],
  location: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: 'Nigeria',
      required: true,
    },
    long: {
      type: String,
      required: true,
    },
    lat: {
      type: String,
      required: true,
    },
  },
  documents: [
    {
      docType: {
        type: String,
      },
      docSrc: {
        type: String,
      },
      public: {
        type: Boolean,
      },
    },
  ],
  media: [
    {
      mediaType: {
        type: String,
      },
      mediaSrc: {
        type: String,
      },
    },
  ],
  inspection: {
    inspectedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    inspectionDate: {
      type: Date,
    },
    inspectionStatus: {
      type: String,
      default: 'pending',
      required: true,
    },
  },
  currentPrice: {
    type: Number,
    required: true,
  },
  plots: {
    quantity: {
      type: Number,
    },
    forSale: {
      type: Number,
    },
    dimension: {
      type: String,
    },
  },
  lots: [
    {
      lot: {
        type: String,
        required: true,
      },
      available: {
        type: Boolean,
        default: true,
        required: true,
      },
    },
  ],
  hotSale: {
    onSale: {
      type: Boolean,
      default: false,
    },
    ends: {
      type: Date,
    },
    salesDescription: {
      type: String,
    },
  },
  purchasePrice: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
  seller: [
    {
      name: {
        type: String,
      },
      phone: {
        type: String,
      },
      address: {
        type: String,
      },
    },
  ],
  soldOut: {
    type: Boolean,
    default: false,
  },
  priceChanges: [
    {
      price: {
        type: Number,
      },
      changeDate: {
        type: Date,
      },
      changedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Community = mongoose.model('community', communitySchema);
