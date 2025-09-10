import { userRepository } from "../repositories/user-repository.js";
import CustomError from "../utils/custom-error.js";

class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  register = async (body) => {
    try {
      const user = await this.repository.register(body);
      if (!user) throw new CustomError("User registration failed", 400);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  };

  login = async (email, password) => {
    try {
      const user = await this.repository.login(email, password);
      //const token = this.repository.generateToken(user);
      //res.cookie('token', token, { httpOnly: true }).json({ token });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  };

  generateToken = async () => {
    try {
      
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const userService = new UserService(userRepository);