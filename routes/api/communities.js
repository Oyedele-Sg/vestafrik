const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const checkObjectId = require('../../middleware/checkObjectId');

const Profile = require('../../models/Profile');
const Community = require('../../models/Community');

// @router  GET api/communities
// @desc    Get all communities
// @access  Public
router.get('/', async (req, res) => {
  try {
    const communities = await Community.find();
    res.json(communities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @router  POST api/communities
// @desc    Create Communities
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('location', 'Location is required').not().isEmpty(),
      check('currentPrice', 'Current Price is required').not().isEmpty(),
      check('features', 'Community Features is required').not().isEmpty(),
      check('plots', 'plots is required').not().isEmpty(),
      check('purchasePrice', 'Purchase Price is required').not().isEmpty(),
      check('purchaseDate', 'Purchase Date is required').not().isEmpty(),
      check('seller', 'Seller is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Erros exists');
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { plots, name, features, currentPrice, ...rest } = req.body;
      let lots = [];
      for (let i = 0; i < plots.quantity; i++) {
        lots.push({
          lot: `Lot - ${name.substring(0, 3)} - ${i + 1}`,
          available: true,
        });
      }

      let communityFeatures = [];
      for (let i = 0; i < features.length; i++) {
        communityFeatures.push({ feature: features[i] });
      }

      const priceChanges = [
        {
          price: currentPrice,
          changeDate: Date.now(),
          changedBy: req.user.id,
        },
      ];
      /**
       * TODO:
       * Process documents with aws bucket
       * Process media with aws
       */
      let communityFields = new Community({
        name: req.body.name,
        lots,
        features: communityFeatures,
        priceChanges,
        plots,
        currentPrice,
        ...rest,
      });

      await communityFields.save();

      return res.json(communityFields);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

// @router  POST api/communities/:community_id
// @desc    Update Community Detail
// @access  Private
router.post(
  '/:community_id',
  [
    auth,
    checkObjectId('community_id'),
    check('newPrice').custom((value) => {
      if (value == undefined) {
        throw new Error('New Price is not defined');
      }
      return true;
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const community_id = req.params.community_id;
      const adminProfile = await Profile.findOne({
        $and: [{ user: req.user.id }, { userType: 'admin' }],
      });
      if (!adminProfile) {
        return res.status(401).json({ msg: 'User not authorized' });
      }

      //take note of newPrice for frontend
      let { features, newPrice, priceChanges, currentPrice, ...rest } =
        req.body;

      if (newPrice !== '') {
        let priceChange = {
          price: newPrice,
          changeDate: Date.now(),
          changedBy: req.user.id,
        };
        priceChanges.push(priceChange);
        currentPrice = newPrice;
      }

      let communityFields = {
        priceChanges,
        currentPrice,
        ...rest,
      };
      if (features) {
        let communityFeatures = [];
        for (let i = 0; i < features.length; i++) {
          communityFeatures.push({ feature: features[i] });
        }
        communityFields['features'] = communityFeatures;
      }

      let community = await Community.findOneAndUpdate(
        { _id: community_id },
        { $set: communityFields },
        { new: true, upsert: false, setDefaultsOnInsert: true }
      );

      return res.status(200).json(community);
    } catch (err) {
      console.error(err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Community not found' });
      }
      return res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
