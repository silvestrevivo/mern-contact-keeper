const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Contact = require('../models/Contact');


//* @route    GET api/contacts
//* @desc     Get all user contacts
//* @acces    Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//* @route    POST api/contacts
//* @desc     Add new contact
//* @acces    Private
router.post('/', (req, res) => {
  res.send('Add new contact');
});

//* @route    PUT api/contacts/:id
//* @desc     Update contact
//* @acces    Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

//* @route    DELETE api/contacts/:id
//* @desc     Delete contact
//* @acces    Private
router.delete('/:id', (req, res) => {
  res.send('Update contact');
});


module.exports = router;
