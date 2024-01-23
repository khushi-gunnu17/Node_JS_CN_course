// Please don't change the pre-written code
// Import the necessary modules here

import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import UserController from "./src/controllers/user.controller.js";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

//create routes here
const usercontroller = new UserController()

// get
app.get('/register', usercontroller.getRegister)
app.get('/login', usercontroller.getLogin)

// post
app.post('/register', usercontroller.addUser)
app.post('/login', usercontroller.loginUser)

export default app;
