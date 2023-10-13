import { Service } from "@interfaces";
import { UserRepository } from "../../../infra/repository/User.repository";

export class LoginService implements Service {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  async execute(email: string, password: string) {
    return this.userRepository.findByEmail(email);
  }
}
