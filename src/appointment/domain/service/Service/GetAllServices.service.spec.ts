import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";
import { ServiceDomain } from "../../Service.domain";
import { GetAllServicesService } from "./GetAllServices.service";

function makeSut() {
  class ServiceRepositoryStub implements ServiceRepository {
    create!: (
      service: Omit<ServiceDomain, "idService">
    ) => Promise<ServiceDomain>;

    getAll() {
      return new Promise<ServiceDomain[]>((resolve, reject) => {
        return resolve([
          new ServiceDomain({
            idService: "uuid",
            description: "any_description",
            duration: 1,
            name: "any_name",
            price: 1,
          }),
        ]);
      });
    }
  }

  const serviceRepositoryStub = new ServiceRepositoryStub();
  const sut = new GetAllServicesService(serviceRepositoryStub);

  return {
    sut,
    serviceRepositoryStub,
  };
}

describe("GetAllServicesService", () => {
  describe("If services were found", () => {
    it("should return a list of services and a success message", async () => {
      try {
        const { sut } = makeSut();

        const result = await sut.execute();
        expect(result.message).toEqual('Serviços listados com sucesso')
      } catch (err) {
        console.log(err);
      }
    });
  });
});
