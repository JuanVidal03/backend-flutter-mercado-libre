import express from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";

const logger = morgan("dev");
config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(logger);
app.use(cors);


const server = app.listen(port, () => console.log(`Server running on port ${server.address().port}`));