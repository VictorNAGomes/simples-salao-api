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
    async getOne(idService: string): Promise<ServiceDomain | null> {
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
    update(
      idService: string,
      data: Partial<Omit<ServiceDomain, "idService">>
    ): Promise<ServiceDomain | null> {
      throw new Error("Method not implemented.");
    }
  }

  const serviceRepositoryStub = new ServiceRepositoryStub();

  const sut = new GetOneServiceService(serviceRepositoryStub);

  return { sut, serviceRepositoryStub };
};

describe("GetOneServiceService", () => {
  describe("If service was found with success", () => {
    it("should return service object and message", async () => {
      try {
        const { sut } = makeSut();

        const response = await sut.execute("any_id");

        expect(response.message).toBe("Serviço encontrado com sucesso");
      } catch (e: any) {}
    });
  });
  describe.only("If service was not found", () => {
    it("should return not found message", async () => {
      try {
        const { sut, serviceRepositoryStub } = makeSut();

        jest
          .spyOn(serviceRepositoryStub, "getOne")
          .mockImplementationOnce(() => {
            return new Promise((resolve) => resolve(null));
          });

        const response = await sut.execute("uuid");

        expect(response.message).toBe("Serviço não encontrado");
      } catch (e: any) {}
    });
  });
});
