import { Service } from "@interfaces";
import { ProfessionalDomain } from "../../Professional.domain";
import { ProfessionalRepository } from "src/userManagement/infra/repository/Professional.repository";
import { PrismaSingleton } from "@singletons";
import { CompanyRepository } from "src/userManagement/infra/repository/Company.repository";

export class CreateProfessionalService implements Service {
  async execute({
    professional,
  }: {
    professional: Omit<ProfessionalDomain, "idUser" | "idProfessional">;
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

    return professionalRepository.create({
      professionalData: professional,
    });
  }
}
