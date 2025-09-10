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
      const user = await this.service.login(email, password);
      res.status(200).json("Usuario logeado");
      //const token = this.service.generateToken(user);
      //res.cookie('token', token, { httpOnly: true }).json({ token });
    } catch (error) {
      next(error);
    }
  };

  /*generateToken = async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error);
    }
  };*/
}

export const userController = new UserController(userService);