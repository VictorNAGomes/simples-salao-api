import { Prisma, PrismaClient } from "@prisma/client";
import { ProfessionalDomain } from "../../domain/Professional.domain";
import { ProfessionalRepositoryProtocol } from "../protocol";

export class ProfessionalRepository implements ProfessionalRepositoryProtocol {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async create(data: {
    professionalData: Omit<ProfessionalDomain, "idUser" | "idProfessional">;
  }) {
    const insertData: Prisma.ProfessionalCreateInput = {
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

    return {
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
            // mode: "insensitive",
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

  public async getOne(
    idProfessional: string
  ): Promise<ProfessionalDomain | null> {
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

  public async update(
    idProfessional: string,
    professionalData: Omit<
      Partial<ProfessionalDomain>,
      "idProfessional" | "password" | "email"
    >
  ) {
    const professional: Prisma.ProfessionalUpdateInput = {
      user: {
        update: {
          name: professionalData.name,
        },
      },
    };
    const dbResult = await this.prisma.professional.update({
      where: {
        idProfessional,
      },
      data: professional,
    });

    if (!dbResult) {
      return null;
    }

    const updatedProfessional = {
      idProfessional: dbResult.idProfessional,
    };

    return updatedProfessional;
  }

  delete(idProfessional: string): Promise<{ idProfessional: string } | null> {
    const dbResult = this.prisma.professional.delete({
      where: {
        idProfessional,
      },
    });

    return dbResult;
  }
}
