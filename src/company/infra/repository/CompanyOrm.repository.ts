import { CompanyDomain } from "../../domain/Company.domain";
import { CompanyRepository } from "./Company.repository";
import { PrismaClient } from "@prisma/client";

export class CompanyOrmRepository implements CompanyRepository {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getAll(): Promise<CompanyDomain[]> {
    const dbResult = await this.prisma.company.findMany();

    const companies: CompanyDomain[] = [];

    for (const company of dbResult) {
      companies.push(
        new CompanyDomain({
          idCompany: company.idCompany,
          cnpj: company.cnpj,
          name: company.name,
          timeUnit: company.timeUnit,
          openingTime: company.openingTime,
          closingTime: company.closingTime,
          creationDate: company.creationDate
        })
      );
    }

    return companies;
  }
  async getOne(idCompany: string): Promise<CompanyDomain | null> {
    const dbResult = await this.prisma.company.findUnique({
      where: {
        idCompany,
      },
    });

    if (!dbResult) {
      return null;
    }

    return new CompanyDomain({
      idCompany: dbResult.idCompany,
      cnpj: dbResult.cnpj,
      name: dbResult.name,
      timeUnit: dbResult.timeUnit,
      openingTime: dbResult.openingTime,
      closingTime: dbResult.closingTime,
      creationDate: dbResult.creationDate
    });
  }

  async update(
    idCompany: string,
    data: Partial<Omit<CompanyDomain, "idCompany">>
  ): Promise<CompanyDomain | null> {
    const dbResult = await this.prisma.company.update({
      data: {
        cnpj: data.cnpj,
        name: data.name,
        timeUnit: data.timeUnit,
        openingTime: data.openingTime,
        closingTime: data.closingTime,
        creationDate: data.creationDate
      },
      where: {
        idCompany,
      },
    });

    if (!dbResult) {
      return null;
    }

    return CompanyDomain.create(dbResult);
  }
}
