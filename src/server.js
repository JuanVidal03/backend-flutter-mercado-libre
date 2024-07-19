import express from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { mongodbConnection } from "./DB/dbconfig.js";

const logger = morgan("dev");
config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(logger);
app.use(cors());

// rutas de la aplicacion
import authRoutes from "./routes/auth.routes.js"
app.use("/api", authRoutes);


const server = app.listen(port, () => console.log(`Server running on port: ${port}`));
mongodbConnection();