import { PrismaClient } from "@prisma/client";
import { UserRepositoryProtocol } from "../protocol/";
import { UserDomain } from "../../domain/User.domain";

export class UserRepository implements UserRepositoryProtocol {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  findByEmail(email: string): Promise<UserDomain> {
    return this.prisma
    throw new Error("Method not implemented.");
  }

  save(user: UserDomain): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
