import { Router } from "express";
import RecipesService from "../services/recipes.service.js";
import IngredientService from "../services/ingredients.service.js";

const router = Router();
const recipesService = new RecipesService();
const ingredientsService = new IngredientService()
//const ingredientsService = new RecipesService();

// Recipes routes
router.get("/recipes", recipesService.getMany.bind(recipesService)); //bind para no perder refencia del service que estoy usando

router.get("/recipes/:id", recipesService.getOne.bind(recipesService));

router.post("/recipes", recipesService.create.bind(recipesService));

router.put("/recipes/:id", recipesService.update.bind(recipesService));

router.delete("/recipes/:id", recipesService.delete.bind(recipesService));

// Ingredients routes
router.get("/ingredients", ingredientsService.getMany.bind(ingredientsService)); //bind para no perder refencia del service que estoy usando

router.get("/ingredients/:id", ingredientsService.getOne.bind(ingredientsService));

router.post("/ingredients", ingredientsService.create.bind(ingredientsService));

router.put("/ingredients/:id", ingredientsService.update.bind(ingredientsService));

router.delete("/ingredients/:id", ingredientsService.delete.bind(ingredientsService));

export default router;
