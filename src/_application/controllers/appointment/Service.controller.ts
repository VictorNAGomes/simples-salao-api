import { PrismaClient } from "@prisma/client";
import { ErrorHandler } from "@utils/ErrorHandler";
import { Request, Response } from "express";
import { CustomError } from "src/_application/CustomError";
import { CreateServiceDto } from "src/_application/dtos/appointments/service/CreateService.dto";
import { CreateServiceValidator } from "src/_application/validators/appointment/service/CreateService.validator";
import { CreateServiceService } from "src/appointment/domain/service/Service/CreateService.service";
import { GetAllServicesService } from "src/appointment/domain/service/Service/GetAllServices.service";
import { ServiceOrmRepository } from "src/appointment/infra/repository/ServiceOrm.repository";

export class ServiceController {
  async createService(req: Request, res: Response) {
    try {
      const createServiceDto: CreateServiceDto = req.body;

      const createServiceValidator = new CreateServiceValidator();
      createServiceValidator.validate(createServiceDto);

      // const serviceRepository = new ServiceOrmRepository(new PrismaClient());
      // const createServiceService = new CreateServiceService(serviceRepository);
      // const result = createServiceService.execute(createServiceDto);

      return res.status(201).json({ result: "teste" });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async listServices(req: Request, res: Response) {
    try {
      const serviceRepository = new ServiceOrmRepository(new PrismaClient());
      const getAllServices = new GetAllServicesService(serviceRepository);
      const result = await getAllServices.execute();
      return res.status(200).json({
        message: result.message,
        result: result.result,
      });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}
