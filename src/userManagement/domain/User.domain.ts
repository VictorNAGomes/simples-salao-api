export class UserDomain {
  idUser!: string;
  email!: string;
  password!: string;

  constructor(data: { idUser: string; email: string; password: string }) {
    this.idUser = data.idUser;
    this.email = data.email;
    this.password = data.password;
  }
}
