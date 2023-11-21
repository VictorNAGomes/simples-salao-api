import { Service } from "@interfaces";
import { ServiceDomain } from "../../Service.domain";
import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";

export class CreateServiceService implements Service {
  constructor(private readonly serviceRepository: ServiceRepository) {}

  async execute(service: Omit<ServiceDomain, "idService">) {
    const result = await this.serviceRepository.create(service);

    if (!result) {
      return { message: "Não foi possível criar o serviço", result };
    }

    return { message: "Serviço criado com sucesso", result };
  }
}
