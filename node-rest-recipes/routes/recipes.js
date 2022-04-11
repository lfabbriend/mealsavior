const express = require('express')
const res = require('express/lib/response')
const { update } = require('../models/ingredient')
const router = express.Router()

var Ingredient = require('../models/ingredient')
const recipe = require('../models/recipe')
var Recipe = require('../models/recipe')
//Getting all the recipes
router.get('/', async(req, res) =>{
    try {
        const recipes= await Recipe.find()
        res.json(recipes)
    } catch (err) {
        //500 means an error in the server
        res.status(500).json({message: err.message})
    }

})
//Getting all the ingredients
router.get('/ingredients', async(req, res) =>{
    try {
        const recipes= await Ingredient.find()
        res.json(recipes)
    } catch (err) {
        //500 means an error in the server
        res.status(500).json({message: err.message})
    }

})

//Getting one recipe
router.get('/:id', getRecipe, (req, res) =>{
    res.json(res.recipe)
})

//Creating a recipe
router.post('/', async (req, res) =>{
    const recipeReq = new Recipe({
        name:req.body.name,
        recipeDescription: req.body.recipeDescription,
        celiac:req.body.celiac,
        vegetarian:req.body.vegetarian,
        vegan:req.body.vegan,
        porciones :req.body.porciones
    })
    try {
        const newRecipe=await recipeReq.save()
        //201 means that something was created successfully
        res.status(201).json(newRecipe)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
//Update an element of one recipe. In this case it use "patch" instade of "update" to avoid update the entire recipe.
router.patch('/:id',getRecipe, async (req, res) =>{
    if(req.body.name != null){
        res.recipe.name=req.body.name
    }
    if(req.body.recipeDescription != null){
        res.recipe.recipeDescription=req.body.recipeDescription
    }
    if(req.body.celiac != null){
        res.recipe.celiac=req.body.celiac
    }
    if(req.body.vegetarian != null){
        res.recipe.vegetarian=req.body.vegetarian
    }
    if(req.body.vegan != null){
        res.recipe.vegan=req.body.vegan
    }
    if(req.body.porciones != null){
        res.recipe.porciones=req.body.porciones
    }
    
    try {
        const updateRecipe = await res.recipe.save()
        res.json(updateRecipe)
    } catch (err) {
        res.status(400).json({message:err})
    }
})
//Delete one recipe
router.delete('/:id', getRecipe, async (req, res) =>{
    try {
        await res.recipe.remove()
        res.json({message:'Deleted Recipe'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getRecipe(req, res, next){
    let recipe
    try {
        recipe = await Recipe.findById(req.params.id)
    if (recipe == null) {
        return res.status(404).json({message:'Cannot find subscriber'})
    }        
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.recipe=recipe
    next()
}

module.exports=router