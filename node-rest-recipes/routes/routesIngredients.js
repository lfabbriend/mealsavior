import { Router } from 'express';
import Ingredient from '../models/ingredient.js';
import Recipe from '../models/recipe.js';
import mongoose from 'mongoose';
const router = Router();

//Getting all the recipes
router.get('/', async (req, res) => {
	try {
		const recipes = await Ingredient.find();
		res.json(recipes);
	} catch (err) {
		//500 means an error in the server
		res.status(500).json({ message: err.message });
	}
});

//Getting all the ingredients
// router.get('/ingredients', async (req, res) => {
//     try {
//         const recipes = await Ingredient.find()
//         res.json(recipes)
//     } catch (err) {
//         //500 means an error in the server
//         res.status(500).json({ message: err.message })
//     }

// })

//Getting one recipe
router.get('/:id', async (req, res) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
		return res.status(500).json({ message: 'En tu cara mongo' });
	}

	try {
		const recipe = await Recipe.findById(mongoose.Types.ObjectId(req.params.id));

		if (recipe) res.status(200).json(recipe);
		else res.status(404).json({ message: 'Recipe not found' });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
	// try {
	//     if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
	//         // Yes, it's a valid ObjectId, proceed with `findById` call.
	//     let recipe= await Recipe.findById(req.params.id)
	//     if (!recipe) {
	//         res.status(404).json({ message: 'Cannooot find recipe' });
	//         // throw new Error('Cannot find recipe')
	//     } else  res.status(200).json(recipe)
	//     } else res.status(404).json({ message: 'Cannot find recipe' });
	// } catch (err) {
	//     res.status(500).json({ message: err.message })
	// }
});

//Creating a ingredient
router.post('/', async (req, res) => {
	const ingredientReq = new Ingredient({
		name: req.body.name
	});
	try {
		const newIngredient = await ingredientReq.save();
		//201 means that something was created successfully
		res.status(201).json(newIngredient);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});
//Update an element of one recipe. In this case it use "patch" instade of "update" to avoid update the entire recipe.
router.put('/:id', async (req, res) => {
	try {
		const updatedRecipe = await Recipe.findOneAndUpdate({ id: req.params.id }, req.body);

		res.json(updatedRecipe);
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

//Delete one recipe
router.delete('/:id', async (req, res) => {
	try {
		let recipe = await Recipe.findByIdAndDelete(req.params.id);
		if (!recipe) {
			res.status(404).json({ message: 'Cannot find recipe' });
			// throw new Error('Cannot find recipe')
		} else res.json({ message: 'Deleted Recipe' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//Function
async function getRecipe(req, res) {
	let recipe;
	try {
		recipe = await Recipe.findOne({ id: req.params.id });
		console.log(recipe);
		if (!recipe) {
			res.status(404).json({ message: 'Cannot find recipe' });
			// throw new Error('Cannot find recipe')
		}
		res.send(recipe);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}
export default router;
