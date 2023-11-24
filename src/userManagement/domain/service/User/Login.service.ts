import { Service } from "@interfaces";
import { ErrorHandler } from "@utils/ErrorHandler";
import { Environment } from "@utils/environment";
import { CustomError } from "src/_application/CustomError";
import jwt from "jsonwebtoken";
import { UserRepositoryProtocol } from "src/userManagement/infra/protocol";

export class LoginService implements Service {
  private userRepository: UserRepositoryProtocol;

  constructor(userRepository: UserRepositoryProtocol) {
    this.userRepository = userRepository;
  }
  async execute(email: string, password: string) {
    try {
      const result = await this.userRepository.findByEmail(email);

      if(!result) {
        return 'E-mail ou senha incorretos';
      }

      if(result.password !== password) {
        return 'E-mail ou senha incorretos';
      }
      
      const token = jwt.sign({ id: result.idUser }, 'secret1', {
        expiresIn: 86400,
      });

      return token;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
