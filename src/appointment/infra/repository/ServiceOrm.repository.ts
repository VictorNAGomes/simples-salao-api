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

  getAll!: () => Promise<ServiceDomain[]>;
}
