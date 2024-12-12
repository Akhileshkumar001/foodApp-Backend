// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerInfo: {
        name: String,
        address: String,
        phone: String,
    },
    cartItems: [
        {
            name: String,
            size: String,
            qty: Number,
            price: Number,
        },
    ],
    paymentMethod: String,
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
