import { Service } from "@interfaces";
import { CompanyRepository } from "src/company/infra/repository/Company.repository";

export class GetAllCompaniesService implements Service {
  companyRepository: CompanyRepository;
  constructor(companyRepository: CompanyRepository) {
    this.companyRepository = companyRepository;
  }

  async execute() {
    try {
      const result = await this.companyRepository.getAll();
      console.log(result);
      if (!result) {
        return {
          message: "Nenhum empresa encontrado",
          result: [],
        };
      }

      return {
        message: "Serviços listados com sucesso",
        result,
      };
    } catch (error: any) {
      console.log(error);
      throw new Error("Não foi possível listar as empresas");
    }
  }
}
