import { PrismaClient } from "@prisma/client";
import { UserRepositoryProtocol } from "../protocol/";
import { UserDomain } from "../../domain/User.domain";

export class UserRepository implements UserRepositoryProtocol {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async findByEmail(email: string): Promise<UserDomain> {
    const result = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!result) throw new Error("User not found");

    return new UserDomain({
      email: result.email,
      password: result.password,
      idUser: result.idUser,
      name: result.name,
    });
  }

  save(user: UserDomain): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
