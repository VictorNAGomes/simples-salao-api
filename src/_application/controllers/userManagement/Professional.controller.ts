import { Request, Response } from "express";
import { CustomError } from "src/_application/CustomError";
import { CreateProfessionalValidator } from "src/_application/validators/userManagement/Professional/CreateProfessional.validator";
import { GetAllProfessionalsValidator } from "src/_application/validators/userManagement/Professional/GetAllProfessionals.validator";
import { ProfessionalServiceFactory } from "src/_utils/factories/service/ProfessionalService.factory";
import { GetAllProfessionalsService } from "src/userManagement/domain/service/Professional/GetAllProfessionals.service";

export class ProfessionalController {
  async create(req: Request, res: Response) {
    try {
      const validator = new CreateProfessionalValidator();
      const { error } = validator.validate(req.body);
      if (error) {
        throw new Error(error.message);
      }

      const createProfessionalService =
        ProfessionalServiceFactory.createCreateProfessionalService();

      const result = await createProfessionalService.execute(req.body);

      res.status(201).json({
        message: "Conta pessoal e conta de empresa criadas com sucesso",
        result,
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getAllProfessionalsService = new GetAllProfessionalsService();
      const validator = new GetAllProfessionalsValidator();

      validator.validate({ name: `${req.query.name}` });

      const result = await getAllProfessionalsService.execute(req.query);

      res
        .status(200)
        .json({ result, message: "Profissionais encontrados com sucesso" });
    } catch (error: any) {
      
      res.status(error.statusCode ?? 400).json({ message: error.message });
    }
  }
}
