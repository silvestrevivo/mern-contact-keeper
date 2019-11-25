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
router.post('/', [ auth, [
  check('name', 'Name is required').not().isEmpty()
] ], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty){
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, phone, type } = req.body;

  try {

    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id
    });

    const contact = await newContact.save();

    res.json(contact);

  } catch (error) {
    console.error(er.message);
    res.status(500).send('Server error');
  }
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
