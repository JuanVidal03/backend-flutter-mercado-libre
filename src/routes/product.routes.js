import { Router } from "express";
import { createProduct, deleteProductById, getAllProducts, productById } from "../controllers/product.controller.js";

const productRouter = Router();


productRouter.get("/products", getAllProducts);
productRouter.post("/products", createProduct);
productRouter.get("/products/:id", productById);
productRouter.delete("/products/:id", deleteProductById);

export default productRouter;