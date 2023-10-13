import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../../userManagement/infra/repository/User.repository";
import { PrismaSingleton } from "../../singletons/Prisma.singleton";

export class UserRepositoryFactory {
  static createUserRepository() {
    return new UserRepository(PrismaSingleton.getPrismaClient());
  }
}
