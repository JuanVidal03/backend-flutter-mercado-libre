import { Router } from "express";
import { getAllCategories, createCategorie } from "../controllers/categorie.controller.js";

const categorieRouter = Router();

categorieRouter.get("/categories", getAllCategories);
categorieRouter.post("/categories", createCategorie);

export default categorieRouter;