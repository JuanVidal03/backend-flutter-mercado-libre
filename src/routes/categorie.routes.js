import { Router } from "express";
import { getAllCategories, createCategorie, deleteCategoryById, categoryById } from "../controllers/categorie.controller.js";

const categorieRouter = Router();

categorieRouter.get("/categories", getAllCategories);
categorieRouter.get("/categorie/:id", categoryById);
categorieRouter.post("/categories", createCategorie);
categorieRouter.delete("/categorie/:id", deleteCategoryById);

export default categorieRouter;