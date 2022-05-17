import path from "path";
import express from "express";
import hbs from "hbs";
import router from "./router/index.js";

const app = express();
const port = process.env.PORT || 3001;
const publicDir = path.join(process.cwd(), "./public");
const partialsDir = path.join(process.cwd(), "./templates/partials");
const viewsDir = path.join(process.cwd(), "./templates/views");

hbs.registerPartials(partialsDir);

app.use("/", router)
    .use(express.static(publicDir))
    .set("view engine", "hbs")
    .set("views", viewsDir)
    .listen(port, () => console.log(`Server running on port: ${port}`));
