// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { renderBlogForm, renderBlogs, addBlog } from "./src/controllers/blog.controller.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

// Write your code here

// adding middleware to parse the request body
app.use(express.urlencoded({extended: true}))

app.get("/createblog", renderBlogForm)
app.get("/", renderBlogs)
app.post("/addblog", addBlog)

export default app;
