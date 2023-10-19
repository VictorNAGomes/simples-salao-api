import { Request, Response } from "express";
import { CreateProfessionalValidator } from "src/_application/validators/userManagement/Professional/CreateProfessional.validator";
import { GetAllProfessionalsValidator } from "src/_application/validators/userManagement/Professional/GetAllProfessionals.validator";
import { GetOneProfessionalValidator } from "src/_application/validators/userManagement/Professional/GetOneProfessional.validator";
import { UpdateProfessionalValidator } from "src/_application/validators/userManagement/Professional/UpdateProfessional.validator";
import { ProfessionalServiceFactory } from "src/_utils/factories/service/ProfessionalService.factory";
import { ProfessionalDomain } from "src/userManagement/domain";
import { GetAllProfessionalsService } from "src/userManagement/domain/service/Professional/GetAllProfessionals.service";
import { GetOneProfessionalService } from "src/userManagement/domain/service/Professional/GetOneProfessional.service";
import { UpdateProfessionalService } from "src/userManagement/domain/service/Professional/UpdateProfessional.service";

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
      const updateProfessionalService = new UpdateProfessionalService();

      const professionalDto: Omit<
        Partial<ProfessionalDomain>,
        "idProfessional" | "idUser" | "password" | "email"
      > = req.body;
      const idProfessional = req.params.idProfessional;

      const validator = new UpdateProfessionalValidator();
      validator.validate(idProfessional, professionalDto);

      const result = await updateProfessionalService.execute(
        idProfessional,
        professionalDto
      );

      res
        .status(200)
        .json({ result, message: "Profissional atualizado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode ?? 400).json({ message: error.message });
    }
  }
}
