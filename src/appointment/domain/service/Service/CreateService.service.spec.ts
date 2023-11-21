import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";
import { CreateServiceService } from "./CreateService.service";
import { ServiceDomain } from "../../Service.domain";

const makeSut = () => {
  class ServiceRepositoryStub implements ServiceRepository {
    create(
      service: Omit<ServiceDomain, "idService">
    ): Promise<ServiceDomain | null> {
      return Promise.resolve(
        new ServiceDomain({
          idService: "any_id",
          name: "any_name",
          description: "any_description",
          duration: 60,
          price: 60,
        })
      );
    }
    delete(idService: string): Promise<void> {
      throw new Error("Method not implemented.");
    }
    getAll(): Promise<ServiceDomain[]> {
      throw new Error("Method not implemented.");
    }
    getOne(idService: string): Promise<ServiceDomain | null> {
      throw new Error("Method not implemented.");
    }
    update(
      idService: string,
      data: Partial<Omit<ServiceDomain, "idService">>
    ): Promise<ServiceDomain | null> {
      throw new Error("Method not implemented.");
    }
  }
  const serviceRepositoryStub = new ServiceRepositoryStub();

  const sut = new CreateServiceService(serviceRepositoryStub);

  return { sut, serviceRepositoryStub };
};

describe("CreateServiceService unit tests", () => {
  it("should return error if service was not created", async () => {
    const { sut, serviceRepositoryStub } = makeSut();
    const serviceRepositorySpy = jest.spyOn(serviceRepositoryStub, "create");
    serviceRepositorySpy.mockImplementationOnce(() => {
      return Promise.resolve(null);
    });
    const createServiceService = await sut.execute({
      description: "description",
      duration: 60,
      name: "name",
      price: 60,
    });
    expect(createServiceService.message).toBe(
      "Não foi possível criar o serviço"
    );
  });

  it("should return a service if service was created", async () => {
    const { sut } = makeSut();

    const result = await sut.execute({
      description: "description",
      duration: 60,
      name: "name",
      price: 60,
    });

    expect(result.message).toBe("Serviço criado com sucesso");
  });
});
