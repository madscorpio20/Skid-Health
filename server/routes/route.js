import express from "express";
import {addUserController, getUsers, getUser,updateUser, deleteUser} from "../controller/user-controller.js";

const route = express.Router();

route.post('/add' ,addUserController);
route.get('/all', getUsers);
route.get('/edit/:id', getUser);
route.patch('/edit/:id', updateUser);
route.delete('/delete/:id', deleteUser);

export default route;

