import { Service } from "@interfaces";
import { ProfessionalDomain } from "../../Professional.domain";
import { ProfessionalRepository } from "src/userManagement/infra/repository/Professional.repository";
import { CompanyDomain } from "../../Company.domain";
import { PrismaSingleton } from "@singletons";
import { CompanyRepository } from "src/userManagement/infra/repository/Company.repository";

export class CreateProfessionalService implements Service {
  async execute({
    professional,
    company,
  }: {
    professional: Omit<ProfessionalDomain, "idUser" | "idProfessional">;
    company: Omit<CompanyDomain, "idCompany">;
  }) {
    const professionalRepository = new ProfessionalRepository(
      PrismaSingleton.getPrismaClient()
    );

    const professionalAlreadyExists = await professionalRepository.get({
      email: professional.email,
    });

    if (professionalAlreadyExists.length > 0) {
      throw new Error("Já existe um profissional cadastrado com esse email");
    }

    const companyRepository = new CompanyRepository(
      PrismaSingleton.getPrismaClient()
    );

    const companyAlreadyExists = await companyRepository.get({
      cnpj: company.cnpj,
    });

    if (companyAlreadyExists.length > 0) {
      throw new Error("Já existe uma empresa cadastrada com esse CNPJ");
    }

    return professionalRepository.create({
      professionalData: professional,
      companyData: company,
    });
  }
}
