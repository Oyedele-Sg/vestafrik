const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const config = require('config');

const Profile = require('../../models/Profile');
const Subscribe = require('../../models/Subscribe');

const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: config.get('SEND_GRID_KEY'),
    },
  })
);

// @router  GET api/subscribe/
// @desc    Get all subscribers
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    let adminProfile = await Profile.findOne({
      $and: [{ user: req.user.id }, { userType: 'admin' }],
    });
    if (!adminProfile) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    const subscribers = await Subscribe.find();
    res.json(subscribers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @router  POST api/subscribe/
// @desc    Subscribe to mailing
// @access  Public
router.post(
  '/',
  [check('email', 'Email is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email } = req.body;
      const emailExists = await Subscribe.findOne({ email });
      if (emailExists) {
        return res
          .status(200)
          .json({ msg: 'You are already subscribed', success: true });
      }

      const subscriber = new Subscribe({
        email,
      });
      subscriber.save().then((subscriber) => {
        transporter.sendMail({
          to: subscriber.email,
          from: 'vestafrik@gmail.com',
          subject: 'Thank you for joining VestAfrik',
          html: `<h1> Welcome to VestAfrik</h1><br/> <p> You have successfully subscribed to our mailing list. </p>`,
        });
      });
      return res
        .status(201)
        .json({ msg: 'You are successfully subscribed!', success: true });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
