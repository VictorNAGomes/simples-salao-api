import { Request, Response } from "express";
import { CreateProfessionalValidator } from "src/_application/validators/userManagement/Professional/CreateProfessional.validator";
import { ProfessionalServiceFactory } from "src/_utils/factories/service/ProfessionalService.factory";

export class ProfessionalController {
  async create(req: Request, res: Response) {
    try {
      const createProfessionalService =
        ProfessionalServiceFactory.createCreateProfessionalService();

      const validator = new CreateProfessionalValidator();
      const { error } = validator.validate(req.body);
      if (error) {
        throw new Error(error.message);
      }

      validator.validate(req.body);

      createProfessionalService.execute(req.body);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
