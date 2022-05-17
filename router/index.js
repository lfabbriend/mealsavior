import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => res.render("home", { title: "Home", layout: false }));

router.get("/about", (_req, res) => res.render("about", { title: "About us", layout: false }));

export default router;
