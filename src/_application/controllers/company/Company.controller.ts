import { Request, Response } from "express";
import { GetOneCompanyValidator } from "src/_application/validators/company/GetOneCompany.validator";
import { UpdateCompanyValidator } from "src/_application/validators/company/UpdateCompany.validator";
import { CompanyServiceFactory } from "src/_utils/factories/service/CompanyService.factory";

export class CompanyController {
  async getAll(req: Request, res: Response) {
    try {
      const getAllCompanysService = CompanyServiceFactory.createGetAllCompanyService();


      const result = await getAllCompanysService.execute();

      res
        .status(200)
        .json({ result, message: "Profissionais encontrados com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode ?? 400).json({ message: error.message });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const getOneCompanyService = CompanyServiceFactory.createGetOneCompanyService();
      const validator = new GetOneCompanyValidator();
      validator.validate(req.params.idCompany);

      const result = await getOneCompanyService.execute(
        req.params.idCompany
      );

      res
        .status(200)
        .json({ result, message: "empresa encontrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode ?? 400).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const updateCompanyService =
        CompanyServiceFactory.createUpdateCompanyService();

      const validator = new UpdateCompanyValidator();
      validator.validate(req.params.idCompany, req.body);

      const result = await updateCompanyService.execute(
        req.params.idCompany,
        req.body
      );

      res
        .status(200)
        .json({ result, message: "empresa atualizado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode ?? 400).json({ message: error.message });
    }
  }
}
