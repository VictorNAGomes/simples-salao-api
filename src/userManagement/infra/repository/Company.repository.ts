import { PrismaClient } from "@prisma/client";
import { CompanyRepositoryProtocol } from "../protocol";
import { CompanyDomain } from "src/userManagement/domain/Company.domain";

export class CompanyRepository implements CompanyRepositoryProtocol {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get(filter: Partial<CompanyDomain>): Promise<CompanyDomain[]> {
    const dbResult = await this.prisma.company.findMany({
      where: filter,
    });

    const companies = dbResult.map(
      (company) =>
        new CompanyDomain({
          idCompany: company.idCompany,
          cnpj: company.cnpj,
          creationDate: company.creationDate,
          name: company.name,
        })
    );

    return companies;
  }
}
