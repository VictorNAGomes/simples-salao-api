export class UserDomain {
  idUser?: string;
  email?: string;
  password?: string;
  name?: string;

  constructor(data: {
    idUser?: string;
    email?: string;
    password?: string;
    name?: string;
  }) {
    this.idUser = data.idUser;
    this.email = data.email;
    this.password = data.password;
    this.name = data.name;
  }
}
