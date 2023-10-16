import { ProfessionalDomain } from "src/userManagement/domain";

export interface ProfessionalRepositoryProtocol {
  create(professional: ProfessionalDomain): ProfessionalDomain;
}
