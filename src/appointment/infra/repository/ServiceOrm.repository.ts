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
  delete(idService: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getOne(idService: string): Promise<ServiceDomain> {
    throw new Error("Method not implemented.");
  }
  update(
    idService: string,
    data: Partial<Omit<ServiceDomain, "idService">>
  ): Promise<ServiceDomain> {
    throw new Error("Method not implemented.");
  }
}
