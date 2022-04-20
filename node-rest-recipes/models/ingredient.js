import mongoose from 'mongoose';

const ingredientsSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

export default mongoose.model("Ingredient", ingredientsSchema)