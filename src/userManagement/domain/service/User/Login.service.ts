import { Service } from "@interfaces";
import { ErrorHandler } from "@utils/ErrorHandler";
import { Environment } from "@utils/environment";
import { CustomError } from "src/_application/CustomError";
import { UserRepository } from "src/userManagement/infra/repository/User.repository";
import jwt from 'jsonwebtoken'

export class LoginService implements Service {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  async execute(email: string, password: string) {
    try {
      const result = await this.userRepository.findByEmail(email);

      if (!result) {
        ErrorHandler.throwWithLog(
          new CustomError("Email ou senha incorretos", 400)
        );
      }

      if (password !== result.password) {
        ErrorHandler.throwWithLog(
          new CustomError("Email ou senha incorretos", 400)
        );
      }

      const token = jwt.sign({ result }, Environment.getJwtSecret(), {
        expiresIn: "1h",
      });
      if (!token) {
        ErrorHandler.throwWithLog(new CustomError("Erro ao autenticar", 500));
      }

      return { token, message: "Login realizado com sucesso!" };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
