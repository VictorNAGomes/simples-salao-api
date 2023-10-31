import { PrismaSingleton } from "@singletons";
import { Request, Response } from "express";
import { CreateServiceDto } from "src/_application/dtos/appointments/service/CreateService.dto";
import { CreateServiceValidator } from "src/_application/validators/appointment/service/CreateService.validator";
import { GetOneServiceValidator } from "src/_application/validators/appointment/service/GetOneService.validator";
import { CreateServiceService } from "src/appointment/domain/service/Service/CreateService.service";
import { GetAllServicesService } from "src/appointment/domain/service/Service/GetAllServices.service";
import { GetOneServiceService } from "src/appointment/domain/service/Service/GetOneService.service";
import { ServiceOrmRepository } from "src/appointment/infra/repository/ServiceOrm.repository";

export class ServiceController {
  async createService(req: Request, res: Response) {
    try {
      const createServiceDto: CreateServiceDto = req.body;

      const createServiceValidator = new CreateServiceValidator();
      createServiceValidator.validate(createServiceDto);

      const serviceRepository = new ServiceOrmRepository(
        PrismaSingleton.getPrismaClient()
      );
      const createServiceService = new CreateServiceService(serviceRepository);
      const { result, message } = await createServiceService.execute(
        createServiceDto
      );

      return res.status(201).json({ result, message });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async listServices(req: Request, res: Response) {
    try {
      const serviceRepository = new ServiceOrmRepository(
        PrismaSingleton.getPrismaClient()
      );
      const getAllServices = new GetAllServicesService(serviceRepository);
      const { message, result } = await getAllServices.execute();
      return res.status(200).json({
        message,
        result,
      });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getOneService(req: Request, res: Response) {
    try {
      console.log("requisição feita")
      const idService: string = req.params.idService;
      const getOneServiceValidator = new GetOneServiceValidator();
      getOneServiceValidator.validate(idService);

      const serviceRepository = new ServiceOrmRepository(
        PrismaSingleton.getPrismaClient()
      );
      const getOneServiceService = new GetOneServiceService(serviceRepository);

      const { message, result } = await getOneServiceService.execute(idService);
      console.log(message, result)
      return res.status(200).json({
        message,
        result,
      });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}
