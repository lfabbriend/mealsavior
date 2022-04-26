import { Router } from "express";
import RecipesService from "../services/recipes.service.js";
import IngredientsService from "../services/ingredients.service.js";
import LoginService from "../services/login.service.js";

const router = Router();
const recipesService = new RecipesService();
const ingredientsService = new IngredientsService()
const loginServiceService = new LoginService();

// Recipes routes
router.get("/recipes", recipesService.getMany.bind(recipesService)); //bind para no perder refencia del service que estoy usando

router.get("/recipes/:id", recipesService.getOne.bind(recipesService));

router.post("/recipes", recipesService.create.bind(recipesService));

router.put("/recipes/:id", recipesService.update.bind(recipesService));

router.delete("/recipes/:id", recipesService.delete.bind(recipesService));

// Ingredients routes
router.get("/ingredients", ingredientsService.getMany.bind(ingredientsService)); //bind para no perder refencia del service que estoy usando

router.get("/ingredients/:id", ingredientsService.getOne.bind(ingredientsService));

router.post("/ingredients/", ingredientsService.create.bind(ingredientsService));

router.put("/ingredients/:id", ingredientsService.update.bind(ingredientsService));

router.delete("/ingredients/:id", ingredientsService.delete.bind(ingredientsService));

// login routes
router.get("/login", loginServiceService.getMany.bind(loginServiceService)); //bind para no perder refencia del service que estoy usando

router.get("/login/:id", loginServiceService.getOne.bind(loginServiceService));

router.post("/login", loginServiceService.create.bind(loginServiceService));

router.put("/login/:id", loginServiceService.update.bind(loginServiceService));

router.delete("/login/:id", loginServiceService.delete.bind(loginServiceService));

export default router;
