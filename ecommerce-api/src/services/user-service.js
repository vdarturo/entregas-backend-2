import { userRepository } from "../repositories/user-repository.js";
import CustomError from "../utils/custom-error.js";

class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  register = async () => {
    try {
      const response = await this.repository.register(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  login = async () => {
    try {
      const { email, password } = req.body;
      const user = await this.repository.login(email, password);
      const token = this.repository.generateToken(user);
      res.cookie('token', token, { httpOnly: true }).json({ token });
    } catch (error) {
      next(error);
    }
  };

  generateToken = async () => {
    try {
      
    } catch (error) {
      next(error);
    }
  };
}

export const userService = new UserService(userRepository);