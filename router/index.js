import { Router } from "express";
import RecipesService from "../services/recipes.service.js";
import IngredientsService from "../services/ingredients.service.js";
import LoginService from "../services/login.service.js";

const router = Router();
const recipesService = new RecipesService();
const ingredientsService = new IngredientsService();
const loginService = new LoginService();

router.get("/", (_req, res) =>
  res.render("home", { 
    title: "Home",
    layout: false,
	recipes: [
		{name: "DoubleCheese Burguer", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil distinctio quia labore repellendus. Facere, molestiasvoluptatem. Numquam doloremque, asperiores quia repudiandae atque cumque eos, vel laboriosam, fugiat quidem commodi!", image:"https://i.blogs.es/58e562/hambruguesa/1366_2000.jpg"},
		{name: "Spaghetti Rock", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil distinctio quia labore repellendus. Facere, molestiasvoluptatem. Numquam doloremque, asperiores quia repudiandae atque cumque eos, vel laboriosam, fugiat quidem commodi!", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F02%2F14%2Frecetas-4115-spaghetti-boloesa-facil-2000.jpg&q=60"},
		{name: "Sweet Sushi", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil distinctio quia labore repellendus. Facere, molestiasvoluptatem. Numquam doloremque, asperiores quia repudiandae atque cumque eos, vel laboriosam, fugiat quidem commodi!", image:"https://img-global.cpcdn.com/recipes/recipes_166271_v1428083076_receta_foto_00166271-l8sozatquuh1mrqtfac2/1200x630cq70/photo.jpg"},
		{name: "Milanesa Argenta", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil distinctio quia labore repellendus. Facere, molestiasvoluptatem. Numquam doloremque, asperiores quia repudiandae atque cumque eos, vel laboriosam, fugiat quidem commodi!", image:"https://static.misionesonline.news/wp-content/uploads/2020/05/28163533/milaaa.jpg"},
		{name: "Homemade Pizza", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil distinctio quia labore repellendus. Facere, molestiasvoluptatem. Numquam doloremque, asperiores quia repudiandae atque cumque eos, vel laboriosam, fugiat quidem commodi!", image:"https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg"},
		{name: "Cucumber Vinegar Salad", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil distinctio quia labore repellendus. Facere, molestiasvoluptatem. Numquam doloremque, asperiores quia repudiandae atque cumque eos, vel laboriosam, fugiat quidem commodi!", image:"https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-vinegar-salad.jpg"},
		{name: "Creamy Mac N Cheese", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil distinctio quia labore repellendus. Facere, molestiasvoluptatem. Numquam doloremque, asperiores quia repudiandae atque cumque eos, vel laboriosam, fugiat quidem commodi!", image:"https://static01.nyt.com/images/2019/01/08/dining/jm-creamy-macaroni-and-cheese/jm-creamy-macaroni-and-cheese-articleLarge-v2.jpg"},
		{name: "Epic Ratatouille", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil distinctio quia labore repellendus. Facere, molestiasvoluptatem. Numquam doloremque, asperiores quia repudiandae atque cumque eos, vel laboriosam, fugiat quidem commodi!", image:"https://comedelahuerta.com/wp-content/uploads/2020/09/iStock-1180869403.jpg"}
		],
	})
);


router.get("/signup", (_req, res) =>
  res.render("signup", { title: "Signup", layout: false })
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
