// Please don't change the pre-written code
// Import the necessary modules here
import { blogs } from "../models/blog.model.js";

export const renderBlogs = (req, res) => {
  // Write your code here
  res.render("blogs", {blogs})
};

export const renderBlogForm = (req, res) => {
  // Write your code here
  res.render("addBlogForm")
};

export const addBlog = (req, res) => {
  // Write your code here
  const {title, description, img} = req.body;

  // Validation : Check if title and description are present
  if(!title || !description) {
    return res.status(400).send("Title and Description are required.")
  }

  const newBlog = { title, description, img }

  blogs.push(newBlog)

  res.redirect("/");
};
