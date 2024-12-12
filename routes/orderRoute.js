
const orderRoute=require('../controller/orderUser')
const express=require("express")
const Router=express.Router()

Router.post('/order',orderRoute)



module.exports = Router;