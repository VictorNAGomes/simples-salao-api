import { Service } from "@interfaces";
import { ProfessionalDomain } from "../../Professional.domain";
import { ProfessionalRepository } from "src/userManagement/infra/repository/Professional.repository";

export class CreateProfessionalService implements Service {
  execute(professional: ProfessionalDomain) {
    const repository = new ProfessionalRepository()
    return repository.create(professional)
  }
}
