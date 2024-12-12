// routes/orders.js
const express = require('express');
const Order = require('../models/orderModel'); // Import the Order model


 const orderUser=async (req, res) => {
    try {
        const { customerInfo, cartItems, paymentMethod } = req.body;

        // Create a new order using the Order model
        const newOrder = new Order({
            customerInfo,
            cartItems,
            paymentMethod,
        });

        // Save the order to the database
        await newOrder.save();

        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = orderUser;
