const mongoose = require('mongoose');

// Define the Contact Schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    howDidYouFindUs: {
        type: String,
        required: true,
        enum: ['friends', 'search', 'advertisement', 'other'], // predefined options
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    termsAccepted: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create a model from the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
