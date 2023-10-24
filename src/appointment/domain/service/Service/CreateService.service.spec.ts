import { CreateServiceService } from "./CreateService.service";

describe("CreateServiceService unit tests", () => {
  it("should return error if service was not created", () => {
    const serviceRepository = {
      create: jest.fn().mockReturnValue(null),
    };

    const createServiceService = new CreateServiceService(serviceRepository);

    createServiceService
      .execute({
        description: "description",
        duration: 60,
        name: "name",
        price: 60,
      })
      .catch((error) => {
        expect(error.message).toBe("Não foi possível criar o serviço");
      });
  });

  it("should return a service if service was created", () => {
    const serviceRepository = {
      create: jest.fn().mockReturnValue({
        idService: 1,
        description: "description",
        duration: 60,
        name: "name",
        price: 60,
      }),
    };

    const createServiceService = new CreateServiceService(serviceRepository);

    createServiceService
      .execute({
        description: "description",
        duration: 60,
        name: "name",
        price: 60,
      })
      .then((result) => {
        expect(result).toEqual({
          idService: 1,
          description: "description",
          duration: 60,
          name: "name",
          price: 60,
        });
      })
      .catch();
  });
});
