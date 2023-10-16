import { Service } from "@interfaces";
import { UserRepository } from "../../../infra/repository/User.repository";
import jwt from "jsonwebtoken";
import { logger } from "src/_utils/logger";
import { Environment } from "@utils";
export class LoginService implements Service {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  async execute(email: string, password: string) {
    try {
      const result = await this.userRepository.findByEmail(email);

      if (!result) {
        logger.log({
          level: "error",
          message: "Email ou senha incorretos",
        });
        throw new Error("Email ou senha incorretos");
      }

      if (password !== result.password) {
        logger.error("Email ou senha incorretos");
        throw new Error("Email ou senha incorretos");
      }

      const token = jwt.sign({ result }, Environment.jwt_secret, { expiresIn: "1h" });
      if (!token) {
        logger.error("Erro ao gerar token jwt");
        throw new Error("Erro interno");
      }

      return token;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
