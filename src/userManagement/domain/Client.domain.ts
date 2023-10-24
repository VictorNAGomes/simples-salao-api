import { UserDomain } from "./User.domain";

export class ClientDomain extends UserDomain {
  idClient: string;
  constructor(data: {
    idUser: string;
    email: string;
    password: string;
    name: string;
    idClient: string;
  }) {
    super(data);
    this.idClient = data.idClient;
  }
}
