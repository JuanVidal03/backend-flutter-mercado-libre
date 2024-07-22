import express from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { mongodbConnection } from "./DB/dbconfig.js";
import cookieParser from "cookie-parser";

const logger = morgan("dev");
config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(logger);
app.use(cors());
app.use(cookieParser());

// rutas de la aplicacion
import authRoutes from "./routes/auth.routes.js"
import categorieRouter from "./routes/categorie.routes.js";
import productRouter from "./routes/product.routes.js";
app.use("/api", authRoutes);
app.use("/api", categorieRouter);
app.use("/api", productRouter)


const server = app.listen(port, () => console.log(`Server running on port: ${server.address().port}`));
mongodbConnection();