import { CompanyDomain } from "src/appointment/domain/Company.domain";

export interface CompanyRepository {
  getAll(): Promise<CompanyDomain[]>;
  getOne(idCompany: string): Promise<CompanyDomain | null>;
  update(idCompany: string, data: Partial<Omit<CompanyDomain, 'idCompany'>>): Promise<CompanyDomain | null>;
}
