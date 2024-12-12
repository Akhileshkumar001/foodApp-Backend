const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controller/Contactus');

// Route to handle Contact Us form submission
router.post('/contact', submitContactForm);

module.exports = router;
