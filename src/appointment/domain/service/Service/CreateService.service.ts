import { Service } from "@interfaces";
import { ServiceDomain } from "../../Service.domain";
import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";

export class CreateServiceService implements Service {
  constructor(readonly serviceRepository: ServiceRepository) {}

  async execute(service: Omit<ServiceDomain, "idService">) {
    const result = await this.serviceRepository.create(service);

    if (!result) {
      throw new Error("Não foi possível criar o serviço");
    }

    return result;
  }
}
