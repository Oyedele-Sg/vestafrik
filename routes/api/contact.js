const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const config = require('config');

const Profile = require('../../models/Profile');
const Contact = require('../../models/Contact');

const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: config.get('SEND_GRID_KEY'),
    },
  })
);

// @router  GET api/contact/
// @desc    Get all contact us messages
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    let adminProfile = await Profile.findOne({
      $and: [{ user: req.user.id }, { userType: 'admin' }],
    });
    if (!adminProfile) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @router  POST api/contact/
// @desc    Send contact us message
// @access  Public
router.post(
  '/',
  [
    check('email', 'Email is required').not().isEmpty(),
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('message', 'Message is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const contact = new Contact({
        firstName,
        lastName,
        email,
        message,
      });
      contact.save().then((contact) => {
        transporter.sendMail({
          to: contact.email,
          from: 'vestafrik@gmail.com',
          subject: `We'll get back to you shortly`,
          html: `<h1> We got your message</h1><br/> <p> Hi ${contact.firstName}, </p><p> We got your message and we will contact you within 1-3 bussiness days. </p>`,
        });
      });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
