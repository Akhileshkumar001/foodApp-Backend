// const express=require("express")
// const authContoll=require('../controller/UserController')
// const fs=require('fs')
// const mongoose=require('mongoose')
// require('dotenv').config()

// const Router=express.Router()
// const uri = process.env.MONGODB_URI 
// mongoose
//         .connect(uri)
//         .then(()=> {
//             console.log("DB connected successfully");
//         })
//         .catch(function (error) {
//             console.log("Somthing is Error to connecting to MongoDB:", error);
//     });

// Router.post('/signUp',authContoll.RegisterUser);
// Router.post('/login',authContoll.LoginUser)
// Router.post('/upload-data',)

// module.exports=Router;


const authContoll= require('../controller/UserController');
const foodData=require('../models/FoodDataM')
const express=require("express")
const Router=express.Router()

Router.post('/signUp', authContoll.RegisterUser);
Router.post('/login', authContoll.LoginUser);

// Router.post("/foodData",foodData.FoodItemSchema)

module.exports = Router;
