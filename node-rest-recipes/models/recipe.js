import mongoose from 'mongoose';
//var Ingredient = mongoose.model('Ingredient');
import Ingredient from '../models/ingredient.js';

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    recipeDescription: {
        type: String,
        required: true
    },
    celiac: {
        type: Boolean,
        required: true
    },
    vegetarian: {
        type: Boolean,
        required: true
    },
    vegan: {
        type: Boolean,
        required: true
    },
    porciones: {
        type: Number
    },
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
    }]
})

export default mongoose.model("Recipe", recipeSchema)