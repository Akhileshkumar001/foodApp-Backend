const mongoose=require('mongoose')

const FoodCategoresRoute=mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    }
})

module.exports=mongoose.model("FoodCategories",FoodCategoresRoute)