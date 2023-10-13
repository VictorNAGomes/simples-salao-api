import { PrismaClient } from "@prisma/client";
import { Service } from "@utils";

export class LoginService implements Service {
  constructor(userRepository: UserRepository) {}
  async execute(email: string, password: string) {
    
    return user;
  }
}
