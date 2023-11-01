import { ServiceDomain } from "src/appointment/domain/Service.domain";
import { ServiceRepository } from "./Service.repository";
import { PrismaClient } from "@prisma/client";

export class ServiceOrmRepository implements ServiceRepository {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
  async create(
    service: Omit<ServiceDomain, "idService">
  ): Promise<ServiceDomain> {
    const dbResult = await this.prisma.service.create({
      data: {
        description: service.description,
        duration: service.duration,
        name: service.name,
        price: service.price,
      },
    });

    return new ServiceDomain({
      idService: dbResult.idService,
      description: dbResult.description,
      duration: dbResult.duration,
      name: dbResult.name,
      price: dbResult.price,
    });
  }

  async getAll(): Promise<ServiceDomain[]> {
    const dbResult = await this.prisma.service.findMany();

    const services: ServiceDomain[] = [];

    for (const service of dbResult) {
      services.push(
        new ServiceDomain({
          description: service.description,
          duration: service.duration,
          idService: service.idService,
          name: service.name,
          price: service.price,
        })
      );
    }

    return services;
  }
  async getOne(idService: string): Promise<ServiceDomain | null> {
    const dbResult = await this.prisma.service.findUnique({
      where: {
        idService,
      },
    });

    if (!dbResult) {
      return null;
    }

    return new ServiceDomain({
      description: dbResult.description,
      duration: dbResult.duration,
      idService: dbResult.idService,
      name: dbResult.name,
      price: dbResult.price,
    });
  }
  async update(
    idService: string,
    data: Partial<Omit<ServiceDomain, "idService">>
  ): Promise<ServiceDomain | null> {
    const dbResult = await this.prisma.service.update({
      data: {
        description: data.description,
        duration: data.duration,
        name: data.name,
        price: data.price,
      },
      where: {
        idService,
      },
    });

    if (!dbResult) {
      return null;
    }

    return ServiceDomain.create(dbResult);
  }
  async delete(idService: string) {
    await this.prisma.service.delete({ where: { idService } });
  }
}
