import { ProfessionalDomain } from "src/userManagement/domain";
import { CompanyDomain } from "src/userManagement/domain/Company.domain";

export interface ProfessionalRepositoryProtocol {
  create(data: {
    professionalData: Omit<ProfessionalDomain, "idUser" | "idProfessional">;
    companyData: Omit<CompanyDomain, "idCompany">;
  }): Promise<{ company: CompanyDomain; professional: ProfessionalDomain }>;
  getAll(filters: { name?: string }): Promise<ProfessionalDomain[]>
  getOne(idProfessional: string): Promise<ProfessionalDomain | null>
}
