import { PrismaClient } from "@prisma/client";
import { UserDomain } from "../../domain/User.domain";

export interface UserRepositoryProtocol {
  findByEmail(email: string): Promise<UserDomain>;
  save(user: UserDomain): Promise<void>;
}
