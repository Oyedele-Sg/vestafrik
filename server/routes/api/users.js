require('dotenv').config();
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const User = require('../../models/User');
const Profile = require('../../models/Profile');

const { SEND_GRID_KEY, JWTSECRET } = process.env;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: SEND_GRID_KEY,
    },
  })
);

// @router  GET api/users
// @desc    Get all users route
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    let adminProfile = await Profile.findOne({
      $and: [{ user: req.user.id }, { userType: 'admin' }],
    });
    if (!adminProfile) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @router  POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('firstName', 'First Name is required').not().isEmpty(),
    check('middleName', 'Middle Name is required').not().isEmpty(),
    check('lastName', 'Last Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('email').custom((value) => {
      return User.findOne({ email: value }).then((user) => {
        if (user) {
          return Promise.reject('E-mail already in use');
        }
      });
    }),
    check(
      'password',
      'Please enter a password with 8 or more characters'
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, middleName, lastName, email, password } = req.body;

    try {
      // See if the user exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          errors: [{ msg: 'An account with this email already exists.' }],
        });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      user = new User({
        firstName,
        middleName,
        lastName,
        email,
        avatar,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      user.save().then((user) => {
        transporter.sendMail({
          to: user.email,
          from: 'vestafrik@gmail.com',
          subject: 'Welcome to VestAfrik',
          html: `<h1> Welcome to VestAfrik</h1><br/> <p> Hello ${firstName} </p>`,
        });
      });
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, JWTSECRET, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
