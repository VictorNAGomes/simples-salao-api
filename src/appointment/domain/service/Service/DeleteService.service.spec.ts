import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";
import { ServiceDomain } from "../../Service.domain";
import { DeleteServiceService } from "./DeleteService.service";

const makeSut = () => {
  class ServiceRepositoryStub implements ServiceRepository {
    create(service: Omit<ServiceDomain, "idService">): Promise<ServiceDomain> {
      throw new Error("Method not implemented.");
    }
    getAll(): Promise<ServiceDomain[]> {
      throw new Error("Method not implemented.");
    }
    getOne(idService: string): Promise<ServiceDomain> {
      throw new Error("Method not implemented.");
    }
    async delete(idService: string): Promise<void> {
      await new Promise((resolve) => resolve(null));
    }
    update(
      idService: string,
      data: Partial<Omit<ServiceDomain, "idService">>
    ): Promise<ServiceDomain | null> {
      throw new Error("Method not implemented.");
    }
  }

  const serviceRepositoryStub = new ServiceRepositoryStub();

  const sut = new DeleteServiceService(serviceRepositoryStub);

  return { sut, serviceRepositoryStub };
};

describe("DeleteServiceService", () => {
  describe("If service was deleted with success", () => {
    it("should return void", async () => {
      const { sut } = makeSut();

      const response = await sut.execute("any_id");

      expect(response.message).toBe("Serviço excluído com sucesso");
    });
  });
  describe("If service was not found", () => {
    it("should return not found error", async () => {
      const { sut, serviceRepositoryStub } = makeSut();

      jest.spyOn(serviceRepositoryStub, "delete").mockImplementationOnce(() => {
        throw new Error("P2025");
      });

      const response = await sut.execute("uuid");

      expect(response.message).toBe("Serviço não encontrado");
    });
  });
});
