import { CompanyDomain } from "src/userManagement/domain";
import { CompanyDomain } from "src/company/domain/Company.domain";

export interface CompanyRepositoryProtocol {
  get(filter: Partial<CompanyDomain>): Promise<CompanyDomain[]>;
}
