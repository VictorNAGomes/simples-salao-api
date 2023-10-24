import { PrismaClient } from "@prisma/client";
import { ServiceDomain } from "src/appointment/domain/Service.domain";
import { ServiceRepository } from "./Service.repository";

export class ServiceOrmRepository implements ServiceRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(service: Omit<ServiceDomain, "idService">): Promise<void> {
    return await this.prisma.service.create({
      data: {
        name: service.name,
        description: service.description,
        duration: service.duration,
        price: service.price,
      }
    })
  }
}
