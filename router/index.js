import { Router } from "express";
import RecipesService from "../services/recipes.service.js";
import IngredientsService from "../services/ingredients.service.js";
import LoginService from "../services/login.service.js";

const router = Router();
const recipesService = new RecipesService();
const ingredientsService = new IngredientsService();
const loginService = new LoginService();

router.get("/", (_req, res) =>
  res.render("home", { title: "Home", layout: false })
);

router.get("/about", (_req, res) =>
  res.render("about", {
    title: "About us",
    layout: false,
    teammates: [
      { name: "Franco Gaytan", thumb: "franco.png" },
      { name: "Lucia Fabbri", thumb: "lucia.png" },
      { name: "Federico Gramajo", thumb: "fede.png" },
      { name: "Jeronimo Alvarez", thumb: "jero.jpg" },
      { name: "Julian Lostumbo", thumb: "juli.png" },
      { name: "Alexis Jeriha", thumb: "alexis.png" },
      { name: "Agustin D'angelo", thumb: "agus.png" }
    ],
  })
);

router.get("/recipe", (_req, res) =>
  res.render("recipe", { title: "Recipe", layout: false })
);

// Recipes routes
router.get("/recipes", recipesService.getMany.bind(recipesService)); //bind para no perder refencia del service que estoy usando

router.get("/recipes/:id", recipesService.getOne.bind(recipesService));

router.post("/recipes", recipesService.create.bind(recipesService));

router.put("/recipes/:id", recipesService.update.bind(recipesService));

router.delete("/recipes/:id", recipesService.delete.bind(recipesService));

// Ingredients routes
router.get("/ingredients", ingredientsService.getMany.bind(ingredientsService)); //bind para no perder refencia del service que estoy usando

router.get(
  "/ingredients/:id",
  ingredientsService.getOne.bind(ingredientsService)
);

router.post(
  "/ingredients/",
  ingredientsService.create.bind(ingredientsService)
);

router.put(
  "/ingredients/:id",
  ingredientsService.update.bind(ingredientsService)
);

router.delete(
  "/ingredients/:id",
  ingredientsService.delete.bind(ingredientsService)
);

// singIn routes
router.post("/login", loginService.getLogIn.bind(loginService)); //bind para no perder refencia del service que estoy usando

// login routes
router.get("/login", async (req, res) => {
  res.render("login", { title: "Login", layout: false });
}); //bind para no perder refencia del service que estoy usando

router.get("/login/:id", loginService.getOne.bind(loginService));

router.post("/signup", loginService.create.bind(loginService));

router.put("/login/:id", loginService.update.bind(loginService));

router.delete("/login/:id", loginService.delete.bind(loginService));

export default router;
