import { Service } from "@interfaces";
import { ProfessionalDomain } from "../../Professional.domain";
import { ProfessionalRepository } from "src/userManagement/infra/repository/Professional.repository";
import { PrismaSingleton } from "@singletons";

export class GetProfessionalService implements Service {
  async execute(filters: Partial<ProfessionalDomain>) {
    const professionalRepository = new ProfessionalRepository(
      PrismaSingleton.getPrismaClient()
    );

    const professional = await professionalRepository.get(filters);
    return professional;
  }
}
