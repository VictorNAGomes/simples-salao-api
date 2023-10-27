import { PrismaClient } from "@prisma/client";
import { PrismaSingleton } from "@singletons";
import { Request, Response } from "express";
import { CreateServiceDto } from "src/_application/dtos/appointments/service/CreateService.dto";
import { CreateServiceService } from "src/appointment/domain/service/Service/CreateService.service";
import { ServiceOrmRepository } from "src/appointment/infra/repository/ServiceOrm.repository";

export class ServiceController {
  async createService(req: Request, res: Response) {
    try {
      const createServiceDto: CreateServiceDto = req.body;
      const serviceRepository = new ServiceOrmRepository(new PrismaClient());
      const createServiceService = new CreateServiceService(serviceRepository);
      const result = createServiceService.execute(createServiceDto);

      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}
