
const foodData=require('../models/FoodDataM')
const express=require("express")
const Router=express.Router()

// Router.post('/signUp', authContoll.RegisterUser);
Router.post("/foodData",foodData.FoodItemSchema)

module.exports = Router;