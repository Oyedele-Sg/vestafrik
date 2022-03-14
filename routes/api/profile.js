const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const checkObjectId = require('../../middleware/checkObjectId');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @router  GET api/profile/me
// @desc    Get current users prfoile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['firstName', 'middleName', 'lastName', 'avatar', 'email']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'You do not have a profile yet.' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @router  POST api/profile/
// @desc    Create or Update prfoile by user
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('accountStatus', 'Account Status is required').not().isEmpty(),
      check('dob', 'Date of Birth is required').not().isEmpty(),
      check('phone', 'Phone number is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { bvn, dob, phone, accountStatus, ...rest } = req.body;

    const user = await User.findOne({ _id: req.user.id });

    const bvnData = {
      bvn,
      dob,
      firstName: user['firstName'],
      middleName: user['middleName'],
      lastName: user['lastName'],
    };

    const profileFields = {
      user: req.user.id,
      dob,
      phone,
      accountStatus,
      userType: 'client',
      ...rest,
    };

    try {
      const foundProfile = await Profile.findOne({
        user: req.user.id,
      }).populate('user', ['firstName', 'middleName', 'lastName', 'avatar']);

      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

// @route    POST api/profile/:profile_id
// @desc     Update profile by admins
// @access   Private
router.post(
  '/:profile_id',
  [
    auth,
    checkObjectId('profile_id'),
    [
      check('userType', 'User Type is required').not().isEmpty(),
      check('accountStatus', 'Account Status is required').not().isEmpty(),
      check('active', 'Phone number is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const profile_id = req.params.profile_id;
      const { userType, accountStatus, active } = req.body;

      let adminProfile = await Profile.findOne({
        $and: [{ user: req.user.id }, { userType: 'admin' }],
      });
      if (!adminProfile) {
        return res.status(401).json({ msg: 'User not authorized' });
      }

      const profileFields = {
        accountStatus,
        userType,
        active,
      };
      let foundProfile = await Profile.findOneAndUpdate(
        { _id: profile_id },
        { $set: profileFields },
        { new: true, upsert: false, setDefaultsOnInsert: true }
      );
      if (!foundProfile) {
        return res.status(400).json({ msg: 'No profile found for this user' });
      }
      return res.status(200).json(foundProfile);
    } catch (err) {
      console.error(err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      return res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    let adminProfile = await Profile.findOne({
      $and: [{ user: req.user.id }, { userType: 'admin' }],
    });
    if (!adminProfile) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    const profiles = await Profile.find().populate('user', [
      'firstName',
      'middleName',
      'lastName',
      'avatar',
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Private
router.get(
  '/user/:user_id',
  [auth, checkObjectId('user_id')],
  async ({ params: { user_id } }, res) => {
    //req.params.user_id
    try {
      const profile = await Profile.findOne({ user: user_id }).populate(
        'user',
        ['firstName', 'middleName', 'lastName', , 'avatar']
      );

      if (!profile) return res.status(400).json({ msg: 'Profile not found' });

      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      return res.status(500).json({ msg: 'Server error' });
    }
  }
);

module.exports = router;
