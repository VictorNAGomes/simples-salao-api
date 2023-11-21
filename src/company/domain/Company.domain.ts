import { ProfessionalDomain } from "../../userManagement/domain/Professional.domain";

export class CompanyDomain {
  idCompany!: string;
  cnpj!: string;
  name!: string;
  timeUnit!: number;
  openingTime!: number
  closingTime!: number
  creationDate!: Date;

  constructor(company: {
    idCompany: string;
    cnpj: string;
    name: string;
    timeUnit: number;
    openingTime: number
    closingTime: number
    creationDate: Date;
  }) {
    Object.assign(this, company);
  }
  
  static create(service: CompanyDomain): CompanyDomain {
    return new CompanyDomain(service)
  }
}
