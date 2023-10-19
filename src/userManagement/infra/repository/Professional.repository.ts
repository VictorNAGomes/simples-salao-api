import { Prisma, PrismaClient } from "@prisma/client";
import { ProfessionalDomain } from "../../domain/Professional.domain";
import { ProfessionalRepositoryProtocol } from "../protocol";
import { CompanyDomain } from "src/userManagement/domain/Company.domain";

export class ProfessionalRepository implements ProfessionalRepositoryProtocol {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async create(data: {
    professionalData: Omit<ProfessionalDomain, "idUser" | "idProfessional">;
    companyData: Omit<CompanyDomain, "idCompany">;
  }) {
    const insertData: Prisma.ProfessionalCreateInput = {
      company: {
        create: {
          cnpj: data.companyData.cnpj,
          creationDate: data.companyData.creationDate,
          name: data.companyData.name,
        },
      },
      user: {
        create: {
          email: data.professionalData.email,
          password: data.professionalData.password,
          name: data.professionalData.name,
        },
      },
    };

    const dbResult = await this.prisma.professional.create({
      data: insertData,
      include: {
        user: true,
        company: true,
      },
    });

    if (!dbResult) throw new Error("Erro ao criar profissional");

    const professional = new ProfessionalDomain({
      email: dbResult.user.email,
      idProfessional: dbResult.idProfessional,
      name: dbResult.user.name,
      password: dbResult.user.password,
      idUser: dbResult.user.idUser,
    });

    const company = new CompanyDomain({
      cnpj: dbResult.company.cnpj,
      creationDate: dbResult.company.creationDate,
      idCompany: dbResult.company.idCompany,
      name: dbResult.company.name,
    });

    return {
      company,
      professional,
    };
  }

  public async get(data: Partial<ProfessionalDomain>) {
    const dbResult = await this.prisma.professional.findMany({
      where: {
        user: {
          email: data.email,
        },
      },
      include: {
        company: true,
        user: true,
      },
    });

    const professionals = dbResult.map((professional) => {
      return new ProfessionalDomain({
        email: professional.user.email,
        idProfessional: professional.idProfessional,
        name: professional.user.name,
        password: professional.user.password,
        idUser: professional.user.idUser,
      });
    });

    return professionals;
  }

  public async getAll(filters: { name?: string }) {
    const dbResult = await this.prisma.professional.findMany({
      where: {
        user: {
          name: {
            contains: filters.name,
            mode: "insensitive",
          },
        },
      },
      include: {
        company: true,
        user: true,
      },
    });

    const professionals = dbResult.map((professional) => {
      return new ProfessionalDomain({
        email: professional.user.email,
        idProfessional: professional.idProfessional,
        name: professional.user.name,
        password: professional.user.password,
        idUser: professional.user.idUser,
      });
    });

    return professionals;
  }

  public async getOne(idProfessional: string): Promise<ProfessionalDomain | null> {
    const dbResult = await this.prisma.professional.findUnique({
      where: {
        idProfessional,
      },
      include: {
        company: true,
        user: true,
      },
    });

    if (!dbResult) {
      return null;
    }

    return new ProfessionalDomain({
      email: dbResult.user.email,
      idProfessional: dbResult.idProfessional,
      name: dbResult.user.name,
      password: dbResult.user.password,
      idUser: dbResult.user.idUser,
    });
  }
}
