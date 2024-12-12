const mongoose = require('mongoose');

// Define the schema for price options
const OptionSchema = new mongoose.Schema({
  half: String,
  full: String,
  regular: String,
  medium: String,
  large: String,
});

// Define the main food item schema
const FoodItemSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  options: [OptionSchema],
  description: {
    type: String,
    required: true
  }
});

// Create a Mongoose model from the schema
const FoodItem = mongoose.model('FoodItem', FoodItemSchema);

module.exports = FoodItem;
