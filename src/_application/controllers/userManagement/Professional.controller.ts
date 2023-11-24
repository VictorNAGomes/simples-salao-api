import { Request, Response } from "express";
import { CreateProfessionalValidator } from "src/_application/validators/userManagement/Professional/CreateProfessional.validator";
import { GetAllProfessionalsValidator } from "src/_application/validators/userManagement/Professional/GetAllProfessionals.validator";
import { GetOneProfessionalValidator } from "src/_application/validators/userManagement/Professional/GetOneProfessional.validator";
import { UpdateProfessionalValidator } from "src/_application/validators/userManagement/Professional/UpdateProfessional.validator";
import { ProfessionalServiceFactory } from "src/_utils/factories/service/ProfessionalService.factory";
import { GetAllProfessionalsService } from "src/userManagement/domain/service/Professional/GetAllProfessionals.service";
import { GetOneProfessionalService } from "src/userManagement/domain/service/Professional/GetOneProfessional.service";

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
        console.log(req.body)
      const result = await createProfessionalService.execute(req.body);

      res.status(201).json({
        message: result.message,
      });
    } catch (error: any) {
      console.log({ error });
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

  async getOne(req: Request, res: Response) {
    try {
      const getOneProfessionalService = new GetOneProfessionalService();
      const validator = new GetOneProfessionalValidator();
      validator.validate(req.params.idProfessional);

      const result = await getOneProfessionalService.execute(
        req.params.idProfessional
      );

      res
        .status(200)
        .json({ result, message: "Profissional encontrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode ?? 400).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const updateProfessionalService =
        ProfessionalServiceFactory.createUpdateProfessionalService();

      const validator = new UpdateProfessionalValidator();
      validator.validate(req.params.idProfessional, req.body);
      const result = await updateProfessionalService.execute(
        req.params.idProfessional,
        req.body
      );

      res
        .status(200)
        .json({ result, message: "Profissional atualizado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode ?? 400).json({ message: error.message });
    }
  }
}
