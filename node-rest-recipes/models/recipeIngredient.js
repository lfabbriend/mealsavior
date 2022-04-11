const mongoose = require('mongoose')
const Schema = mongoose.Schema
var Ingredient = mongoose.model('Ingredient');
var Recipe = mongoose.model('Recipe');

const ingredientsSchema = new Schema({
    recipe: { type: Schema.ObjectId, ref: "Recipe" },
    ingredient: { type: Schema.ObjectId, ref: "Ingredient" }
})

module.exports=mongoose.model("Ingredient", ingredientsSchema)