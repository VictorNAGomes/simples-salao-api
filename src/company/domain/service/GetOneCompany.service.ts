import { Service } from "@interfaces";
import { CompanyRepository } from "src/company/infra/repository/Company.repository";

export class GetOneCompanyService implements Service {
  constructor(private readonly serviceRepository: CompanyRepository) {}
  async execute(idCompany: string) {
    try {
      const result = await this.serviceRepository.getOne(idCompany);

      if (!result) {
        return {
          message: "Empresa não encontrado",
          result,
        };
      }

      return {
        message: "Empresa encontrado com sucesso",
        result,
      };
    } catch (error) {
      return {
        message: "Algum erro inesperado ocorreu",
      };
    }
  }
}
