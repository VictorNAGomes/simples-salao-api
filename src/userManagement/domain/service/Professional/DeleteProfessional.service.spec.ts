import { ProfessionalRepository } from "src/userManagement/infra/repository/Professional.repository";
import { DeleteProfessionalService } from "./DeleteProfessional.service";

describe("Deletar profissionais", () => {
  describe("Ao não encontrar nenhum usuário", () => {
    it("Deve retornar um erro", () => {
      const repositoryMock = {
        delete: jest.fn(),
      } as unknown as ProfessionalRepository;

      const sut = new DeleteProfessionalService(repositoryMock);

      sut.execute("id").catch((error) => {
        expect(error.message).toBe("Profissional não encontrado");
      });
    });
  });
  describe("Ao encontrar um usuário e excluí-lo", () => {
    it("Deve retornar o um objeto o id do usuário excluido", () => {
      // Arrange
      const repositoryMock: ProfessionalRepository = {
        delete: jest.fn().mockResolvedValue({ idProfessional: "id" }),
      } as unknown as ProfessionalRepository;

      const sut = new DeleteProfessionalService(repositoryMock);

      // Act
      sut.execute("id").then((result) => {
        // Assert
        expect(result).toEqual({ idProfessional: "id" });
        expect(repositoryMock.delete).toHaveBeenCalledWith("id");
      });
    });
  });
});
