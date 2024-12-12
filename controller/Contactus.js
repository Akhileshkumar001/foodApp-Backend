const Contact = require('../models/ContactUs');

// Controller for handling form submission
const submitContactForm = async (req, res) => {
    const { name, email, howDidYouFindUs, message, termsAccepted } = req.body;

    // Server-side validation (optional as we already validated in the frontend)
    if (!name || !email || !howDidYouFindUs || !message || !termsAccepted) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Create a new instance of the Contact model
        const newContact = new Contact({
            name,
            email,
            howDidYouFindUs,
            message,
            termsAccepted,
        });

        // Save the contact form data to the database
        await newContact.save();

        // Send success response
        return res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error saving form data:', error);
        // Send error response
        return res.status(500).json({ error: 'Error saving form data' });
    }
};

module.exports = {
    submitContactForm,
};
