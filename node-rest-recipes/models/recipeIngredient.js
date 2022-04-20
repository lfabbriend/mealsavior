import mongoose from 'mongoose';

var Ingredient = mongoose.model('Ingredient');
var Recipe = mongoose.model('Recipe');

const recipeingredientsSchema = new mongoose.Schema({
    recipe: { type: mongoose.Schema.ObjectId, ref: "Recipe" },
    ingredient: { type: mongoose.Schema.ObjectId, ref: "Ingredient" }
    // recipe:{
    //     type: String,
    //     required: true
    // },
    // ingredient:{
    //     type: String,
    //     required: true
    // }
})

export default mongoose.model("recipeIngredient", recipeingredientsSchema)