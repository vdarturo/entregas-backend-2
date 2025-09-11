import { userService } from "../services/user-service.js";

class UserController {
  constructor(service) {
    this.service = service;
  }

  register = async (req, res, next) => {
    try {
      const user = await this.service.register(req.body);
      const {first_name, last_name, age, email} = user
      res.status(201).json({first_name, last_name, age, email});
    } catch (error) {
      next(error);
    }
  };


  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const token = await this.service.login(email, password);
      res.header("Authorization", token).json({token});
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController(userService);