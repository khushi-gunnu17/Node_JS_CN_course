import { authenticateUser, registerUser } from "../models/user.model.js";

export default class UserController {
  getRegister = (req, res, next) => {
    res.render("user-register");
  };
  getLogin = (req, res, next) => {
    res.render("user-login");
  };
  addUser = (req, res) => {
    const status = registerUser(req.body);
    if (status) return res.render("user-login");
  };
  loginUser = (req, res) => {
    const isAuth = authenticateUser(req.body);
    if (isAuth) res.send({ success: "true", message: "login successfull" });
    else res.send({ success: "false", message: "login failed" });
  };
}
