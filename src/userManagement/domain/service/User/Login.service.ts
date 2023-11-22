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

      return 'método a implementar'
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
