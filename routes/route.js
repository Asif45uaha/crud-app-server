import express from 'express'
import { CreateUser, DeleteUser, GetUsers, UpdateUser, getSingleUser } from '../controllers/controller.js';

const Router = express.Router();



Router.post("/users/create", CreateUser);
Router.get("/users/all", GetUsers);
Router.get("/users/single/:id", getSingleUser);
Router.put("/users/:id", UpdateUser)
Router.delete("/users/:id", DeleteUser)

export default Router