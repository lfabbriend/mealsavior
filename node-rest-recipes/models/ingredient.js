const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ingredientsSchema = new Schema({
    name:{

    }
})

module.exports=mongoose.model("Ingredient", ingredientsSchema)