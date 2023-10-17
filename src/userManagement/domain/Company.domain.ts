import { ProfessionalDomain } from "./Professional.domain";

export class CompanyDomain {
  idCompany: string;
  cnpj: string;
  name: string;
  creationDate: Date;
  professionals: ProfessionalDomain[];

  constructor(
    idCompany: string,
    cnpj: string,
    name: string,
    creationDate: Date,
    professionals: ProfessionalDomain[]
  ) {
    this.idCompany = idCompany;
    this.cnpj = cnpj;
    this.name = name;
    this.creationDate = creationDate;
    this.professionals = professionals;
  }
}
