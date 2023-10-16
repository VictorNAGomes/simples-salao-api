import { PrismaClient } from "@prisma/client";
import { ProfessionalDomain } from "../../domain/Professional.domain";
import { ProfessionalRepositoryProtocol } from "../protocol";

export class ProfessionalRepository implements ProfessionalRepositoryProtocol {
  // prisma: PrismaClient;

  // constructor(prisma: PrismaClient) {
  //   this.prisma = prisma;
  // }

  public create(professional: ProfessionalDomain) {
    return new ProfessionalDomain(professional);
  }
}
