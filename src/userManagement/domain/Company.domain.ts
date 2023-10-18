import { ProfessionalDomain } from "./Professional.domain";

export class CompanyDomain {
  idCompany: string;
  cnpj: string;
  name: string;
  creationDate: Date;
  professionals: ProfessionalDomain[];

  constructor(data: {
    idCompany: string;
    cnpj: string;
    name: string;
    creationDate: Date;
    professionals?: ProfessionalDomain[];
  }) {
    this.idCompany = data.idCompany;
    this.cnpj = data.cnpj;
    this.name = data.name;
    this.creationDate = data.creationDate;
    this.professionals = data.professionals ?? [];
  }
}
