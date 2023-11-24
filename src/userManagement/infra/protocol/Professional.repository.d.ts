import { ProfessionalDomain } from "src/userManagement/domain";
import { CompanyDomain } from "src/company/domain/Company.domain";

export interface ProfessionalRepositoryProtocol {
  create(
    professional: Omit<ProfessionalDomain, "idUser" | "idProfessional">
  ): Promise<void>;
  // getAll(filters: { name?: string }): Promise<ProfessionalDomain[]>;
  // getOne(idProfessional: string): Promise<ProfessionalDomain | null>;
  // update(
  //   idProfessional: string,
  //   professionalData: Omit<
  //     Partial<ProfessionalDomain>,
  //     "idProfessional" | "idUser" | "password" | "email"
  //   >
  // ): Promise<{ idProfessional: string } | null>;
  // delete(idProfessional: string): Promise<{ idProfessional: string } | null>;
}
