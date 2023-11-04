import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";
import { ServiceDomain } from "../../Service.domain";
import { GetOneServiceService } from "./GetOneService.service";

const makeSut = () => {
  class ServiceRepositoryStub implements ServiceRepository {
    create(service: Omit<ServiceDomain, "idService">): Promise<ServiceDomain> {
      throw new Error("Method not implemented.");
    }
    getAll(): Promise<ServiceDomain[]> {
      throw new Error("Method not implemented.");
    }
    delete(idService: string): Promise<void> {
      throw new Error("Method not implemented.");
    }
    async getOne(idService: string): Promise<ServiceDomain> {
      return await new Promise<ServiceDomain>((resolve) =>
        resolve(
          new ServiceDomain({
            idService: "any_id",
            name: "any_name",
            description: "any_description",
            duration: 60,
            price: 60,
          })
        )
      );
    }
  }

  const serviceRepositoryStub = new ServiceRepositoryStub();

  const sut = new GetOneServiceService(serviceRepositoryStub);

  return { sut, serviceRepositoryStub };
};

describe("GetOneServiceService", () => {
  describe("If service was found with success", () => {
    it("should return service object and message", async () => {
      const { sut } = makeSut();

      const response = await sut.execute("any_id");

      expect(response.message).toBe("Serviço encontrado com sucesso");
    });
  });
  describe("If service was not found", () => {
    it("should return not found message", async () => {
      const { sut, serviceRepositoryStub } = makeSut();

      jest.spyOn(serviceRepositoryStub, "getOne").mockImplementationOnce(() => {
        throw new Error("Service not found");
      });

      const response = await sut.execute("uuid");

      expect(response.message).toBe("Serviço não encontrado");
    });
  });
});
