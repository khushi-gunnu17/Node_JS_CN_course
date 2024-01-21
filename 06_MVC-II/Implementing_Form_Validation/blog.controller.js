export const validateBlog = (req, res) => {
  const { title, description, image } = req.body;
  
  title.trim();
  description.trim();
  image.trim();

  const errors = [];

  try {
    new URL(image);
  } catch (err) {
    errors.push("The image URL provided should be a valid URL");
  }

  if (!title) {
    errors.push("The title field should not be empty");
  }

  if (title.length < 3) {
    errors.push("The title field should contain at least 3 characters");
  }

  if (!description) {
    errors.push("The description field should not be empty");
  }

  if (description.length < 10) {
    errors.push("The description field should contain at least 10 characters");
  }

  if (errors.length > 0) {
    res.status(401).render("addBlog", { errors, success: false });
  }

  res.status(201).render("addBlog", { errors: null, success: true });
};

export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
