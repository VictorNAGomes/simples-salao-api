import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";
import { ServiceDomain } from "../../Service.domain";
import { UpdateServiceService } from "./UpdateService.service";

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
    delete(idService: string): Promise<void> {
      throw new Error("Method not implemented.");
    }
    update(
      idService: string,
      data: Partial<Omit<ServiceDomain, "idService">>
    ): Promise<ServiceDomain> {
      return new Promise<ServiceDomain>((resolve) =>
        resolve(
          new ServiceDomain({
            idService,
            name: data.name ?? "any_name",
            description: data.description ?? "any_description",
            duration: data.duration ?? 60,
            price: data.price ?? 100,
          })
        )
      );
    }
  }

  const serviceRepositoryStub = new ServiceRepositoryStub();

  const sut = new UpdateServiceService(serviceRepositoryStub);

  return { sut, serviceRepositoryStub };
};

describe("UpdateServiceService", () => {
  describe("If service was found", () => {
    it("should return updated service", async () => {
      const { sut } = makeSut();

      const response = await sut.execute("any_id", {
        description: "any_description",
        duration: 60,
        name: "any_name",
        price: 100,
      });

      expect(response.message).toBe("Serviço atualizado com sucesso");
    });
  });
  describe("If service was not found", () => {
    it('should return not found message', async () => {
      const { sut, serviceRepositoryStub } = makeSut();
      jest.spyOn(serviceRepositoryStub, 'update').mockImplementationOnce(() => {
        throw new Error('Service not found')
      })

      const response = await sut.execute('any_id', {
        description: 'any_description',
        duration: 60,
        name: 'any_name',
        price: 100
      })

      expect(response.message).toBe('Serviço não encontrado')
    })
  })
});
