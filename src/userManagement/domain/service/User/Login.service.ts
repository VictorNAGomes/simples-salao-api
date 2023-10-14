import { Service } from "@interfaces";
import { UserRepository } from "../../../infra/repository/User.repository";
import jwt from "jsonwebtoken";
export class LoginService implements Service {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  async execute(email: string, password: string) {
    try {
      const result = await this.userRepository.findByEmail(email);

      if (!result) {
        throw new Error("Email ou senha inexistentes");
      }

      if (password !== result.password) {
        throw new Error("Email ou senha incorretos");
      }

      const token = jwt.sign({ result }, "lol", { expiresIn: "1h" });
      if(!token) {
        throw new Error("Erro interno");
      }
      return token
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
