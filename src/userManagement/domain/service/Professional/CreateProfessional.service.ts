import { Service } from "@interfaces";
import { ProfessionalDomain } from "../../Professional.domain";
import { ProfessionalRepository } from "src/userManagement/infra/repository/Professional.repository";
import { PrismaSingleton } from "@singletons";

export class CreateProfessionalService implements Service {
  async execute(professional: Omit<ProfessionalDomain, "idUser" | "idProfessional">) {
    try {
      const professionalRepository = new ProfessionalRepository(
        PrismaSingleton.getPrismaClient()
      );

      console.log({professional})
      await professionalRepository.create(professional);
      return {
        message: "Conta profissional criada com sucesso",
      };
    } catch (error: any) {
      return {
        message: "Erro ao criar conta profissional"
      }
    }
  }
}
