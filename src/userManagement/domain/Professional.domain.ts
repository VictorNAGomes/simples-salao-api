import { UserDomain } from "./User.domain";

export class ProfessionalDomain extends UserDomain {
  idProfessional: string;
  idCompany: string;
  constructor(data: {
    idUser: string;
    email: string;
    password: string;
    name: string;
    idProfessional: string;
    idCompany: string;
  }) {
    super(data);
    this.idProfessional = data.idProfessional;
    this.idCompany = data.idCompany;
  }
}
