import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import hbs from "hbs";
import router from "./router/index.js";

dotenv.config(); //To get the url in a safe way

const app = express();
const port = process.env.PORT || 3000;
const publicDir = path.join(process.cwd(), "./public");
const partialsDir = path.join(process.cwd(), "./templates/partials");
const viewsDir = path.join(process.cwd(), "./templates/views");

hbs.registerPartials(partialsDir);

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) console.error(error);
    else console.log("Connected to Database");
  }
);

app
  .use(express.json())
  .use(express.urlencoded({ extended: false, limit: "5mb" }))
  .use(cors())
  .use("/", router)
  .use(express.static(publicDir)) //este no se saba para que sirve
  .set("view engine", "hbs")
  .set("views", viewsDir)
  .listen(port, () => console.log("Server Started"));
