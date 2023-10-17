import { UserDomain } from "./User.domain";

export class ProfessionalDomain extends UserDomain {
  idProfessional: string;
  constructor(data: {
    idUser: string;
    email: string;
    password: string;
    name: string;
    idProfessional: string;
  }) {
    super(data);
    this.idProfessional = data.idProfessional;
  }
}
