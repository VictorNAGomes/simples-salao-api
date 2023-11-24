import { UserRepository } from "src/userManagement/infra/repository/User.repository";
import { UserDomain } from "../../User.domain";
import { LoginService } from "./Login.service";
import { UserRepositoryProtocol } from "src/userManagement/infra/protocol";
import { CustomError } from "src/_application/CustomError";

const makeSut = () => {
  class MockUserRepository implements UserRepositoryProtocol {
    public findByEmail(email: string): Promise<UserDomain> {
      throw new Error("Method not implemented.");
    }
    save(user: UserDomain): Promise<void> {
      throw new Error("Method not implemented.");
    }
  }

  const mockUserRepository = new MockUserRepository();

  return {
    sut: new LoginService(mockUserRepository),
    mockUserRepository,
  };
};

let sut: LoginService, mockUserRepository: UserRepositoryProtocol;

describe("LoginService", () => {
  beforeAll(() => {
    const { sut: sutLogin, mockUserRepository: mockUserRepo } = makeSut();
    sut = sutLogin;
    mockUserRepository = mockUserRepo;
  });
  describe("Quando não encontrar nenhum usuário com o email informado", () => {
    it('Deve retornar mensagem: "E-mail ou senha incorretos"', async () => {
      // monitorar o mock do user repository, e adulterar o resultado do método findByEmail
      jest.spyOn(mockUserRepository, "findByEmail").mockReturnValueOnce(null);

      sut
        .execute("email", "senha")
        .then((message: string | undefined) => {
          expect(message).toBe("E-mail ou senha incorretos");
        });
    });
  });
  describe("Quando a senha informada estiver incorreta", () => {
    it('Deve retornar mensagem: "E-mail ou senha incorretos"', async () => {
      // monitorar o mock do user repository, e adulterar o resultado do método findByEmail
      jest.spyOn(mockUserRepository, "findByEmail").mockReturnValueOnce(
        new Promise((resolve) =>
          resolve(
            new UserDomain({
              email: "email",
              name: "name",
              idUser: "uuid",
              password: "hashpassword",
            })
          )
        )
      );

      // instanciar o service com o mock do user repository
      const loginService = new LoginService(mockUserRepository);
      loginService
        .execute("email", "differenthashpassword")
        .then((message: string | undefined) => {
          expect(message).toBe("E-mail ou senha incorretos");
        });
    });
  });
  describe("Quando a senha e e-mail informados estiverem corretos", () => {
    it('Deve retornar um token do tipo string', async () => {
      // monitorar o mock do user repository, e adulterar o resultado do método findByEmail
      jest.spyOn(mockUserRepository, "findByEmail").mockReturnValueOnce(
        new Promise((resolve) =>
          resolve(
            new UserDomain({
              email: "email",
              name: "name",
              idUser: "uuid",
              password: "hashpassword",
            })
          )
        )
      );

      // instanciar o service com o mock do user repository
      const loginService = new LoginService(mockUserRepository);
      loginService
        .execute("email", "hashpassword")
        .then((message: string | undefined) => {
          expect(message).toBeDefined();
        });
    });
  });
});
