const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Community = require('../../models/Community');
const Sale = require('../../models/Sale');
const Portfolio = require('../../models/Portfolio');
const Transaction = require('../../models/Transaction');

// @router  GET api/sales
// @desc    Get all sales
// @access  Public
router.get('/', async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @router  POST api/sales
// @desc    Create New Sale and transaction
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('community_id', 'Community is required').not().isEmpty(),
      check('plots', 'Number of plots is required').not().isEmpty(),
      check('lots', 'Lot selection is required').not().isEmpty(),
      check('amountPaid', 'Amount paid is required').not().isEmpty(),
      check('paymentInfo', 'Payment Info is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { community_id, plots, lots, amountPaid, paymentInfo } = req.body;

      let foundCommunity = await Community.findOne({ _id: community_id });

      if (!foundCommunity) {
        return res.status(400).json({ msg: 'Community is unavailable.' });
      }
      const currentPrice = foundCommunity['currentPrice'];
      const totalCost = currentPrice * plots;

      //run api for payment

      //payment successful

      let availablePlots = foundCommunity['plots'];

      availablePlots.forSale = availablePlots.forSale - plots;

      let community = await Community.findOneAndUpdate(
        { _id: community_id },
        { $set: { plots: availablePlots } },
        { new: true, upsert: false, setDefaultsOnInsert: true }
      );
      await community.save();

      const completePayment = amountPaid == totalCost;

      //ADD NEW SALE
      let saleFields = new Sale({
        client: req.user.id,
        community: community_id,
        plots,
        lots,
        totalCost,
        completePayment,
        date: Date.now(),
      });
      await saleFields.save();

      //ADD NEW TRANSACTION
      const receipt = 'PDCR-234';
      const transactionField = new Transaction({
        sale: saleFields['_id'],
        amountPaid,
        balance: totalCost - amountPaid,
        totalPaid: amountPaid,
        date: Date.now(),
        paymentInfo,
        receipt,
      });

      await transactionField.save();

      // ADD NEW PORTFOLIO
      let documents = []; //generate documents (reciept, pdf title, pdf co_o)
      const portfolioField = new Portfolio({
        user: req.user.id,
        community: community_id,
        sale: saleFields['_id'],
        plots,
        lots, //set lots 'available to false in frontend'
        documents,
      });

      await portfolioField.save();

      return res.json(community);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
