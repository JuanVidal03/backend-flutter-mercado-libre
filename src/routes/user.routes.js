import { Router } from "express";
import { deleteUser, getAllUsers, getUserById } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/users", getAllUsers);
userRouter.get("/user/:id", getUserById);
userRouter.delete("/user/:id", deleteUser);

export default userRouter;