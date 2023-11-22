import { PrismaClient } from "@prisma/client";
import { UserDomain } from "../../domain/User.domain";

export interface UserRepositoryProtocol {
  findByEmail(email: string): Promise<UserDomain> | null;
  save(user: UserDomain): Promise<void>;
}
