import { Service } from "@interfaces";
import { CompanyRepository } from "src/company/infra/repository/Company.repository";
import { CompanyDomain } from "../Company.domain";

export class updateCompanyService implements Service {
  constructor(private readonly companyRepository: CompanyRepository) {}
  async execute(
    idCompany: string,
    company: Partial<Omit<CompanyDomain, "idCompany">>
  ) {
    try {
      const result = await this.companyRepository.update(idCompany, company);

      return {
        message: "Empresa atualizado com sucesso",
        result,
      };
    } catch (error: any) {
      console.log(error);
      return {
        message: "Não foi possível editar o serviço",
      };
    }
  }
}
