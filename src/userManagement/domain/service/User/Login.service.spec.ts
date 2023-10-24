import { UserDomain } from "../../User.domain";
import { LoginService } from "./Login.service";

const mockUserRepository = {
  findByEmail: jest.fn(),
};

describe("LoginService", () => {
  describe("Ao não encontrar nenhum usuário", () => {
    it("Deve retornar erro", async () => {
      try {
        mockUserRepository.findByEmail.mockReturnValueOnce(null);
        const loginService = new LoginService(mockUserRepository as any);
        const result = await loginService.execute("email", "password");
      } catch (erro: any) {
        expect(erro).toBeInstanceOf(Error);
        expect(erro.message).toBe("Error: Email ou senha incorretos");
      }
    });
  });
  describe("Ao informar uma senha incorreta", () => {
    it("Deve retornar erro", async () => {
      try {
        mockUserRepository.findByEmail.mockReturnValueOnce(
          new UserDomain({ email: "aaa", password: "123", idUser: "asd", name: "aa" })
        );

        const loginService = new LoginService(mockUserRepository as any);
        const result = await loginService.execute("email", "wrongpass");
      } catch (erro: any) {
        expect(erro).toBeInstanceOf(Error);
        expect(erro.message).toBe("Error: Email ou senha incorretos");
      }
    });
  });
});
