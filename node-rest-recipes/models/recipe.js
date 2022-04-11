const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recipeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    recipeDescription:{
        type:String,
        required:true
    },
    celiac:{
        type:Boolean,
        required:true        
    },
    vegetarian:{
        type:Boolean,
        required:true  
    },
    vegan:{
        type:Boolean,
        required:true  
    },
    porciones :{
        type:Number,
        required:true  
    }

})

module.exports=mongoose.model("Recipe", recipeSchema)