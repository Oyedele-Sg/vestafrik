const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const crypto = require('crypto');
const { check, validationResult } = require('express-validator');

const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const User = require('../../models/User');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: config.get('SEND_GRID_KEY'),
    },
  })
);

// @router  POST api/auth
// @desc    Authenticate/ Login user and get token
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if the user exists

      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      // Return jwt
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('JWTSECRET'),
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @router  POST api/auth/reset-password
// @desc    Reset user password
// @access  Public
router.post(
  '/reset-password',
  [check('email', 'Please include a valid email').isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          errors: [{ msg: 'There is no account associated with this email' }],
        });
      }

      crypto.randomBytes(32, (err, buffer) => {
        if (err) {
          console.error(err.message);
          return res.status(400).json({
            errors: [{ msg: err.message }],
          });
        }
        const token = buffer.toString('hex');

        user.resetToken = token;
        user.expireToken = Date.now() + 3600000;
        user.save().then((result) => {
          transporter.sendMail({
            to: user.email,
            from: 'vestafrik@gmail.com',
            subject: 'Reset Your Password',
            html: `
          <p> Hi ${user.firstName}, </p>
          <p> You request for a password reset </p>
          <h5> Click this <a href="http://localhost:5003/reset/${token}"> link </a> to reset your password`,
          });
          res.json({
            success: true,
            message: 'Check your email for password reset instructions',
          });
        });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @router  POST api/auth/new-password
// @desc    Set new user password
// @access  Public
router.post(
  '/new-password',
  [
    check(
      'password',
      'Please enter a password with 8 or more characters'
    ).isLength({ min: 8 }),
    check('resetToken', 'Invalid token!').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { password, resetToken } = req.body;
      const user = await User.findOne({
        resetToken,
        expireToken: { $gt: Date.now() },
      });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Try again! Link has expired.' }] });
      }
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      user.resetToken = undefined;
      user.expireToken = undefined;
      user.save().then((res) => {
        transporter.sendMail({
          to: user.email,
          from: 'vestafrik@gmail.com',
          subject: 'Password Rest',
          html: `
          <p> Hi ${firstName}, </p>
          <p> Your password has been updated! </p>`,
        });
      });
      res.json({ success: true, message: 'Password updated!' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
