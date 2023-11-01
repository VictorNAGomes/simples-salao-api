import { Service } from "@interfaces";
import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";
import { ServiceDomain } from "../../Service.domain";

export class UpdateServiceService implements Service {
  constructor(private readonly serviceRepository: ServiceRepository) {}
  async execute(
    idService: string,
    service: Partial<Omit<ServiceDomain, "idService">>
  ) {
    try {
      const result = await this.serviceRepository.update(idService, service);

      return {
        message: "Serviço atualizado com sucesso",
        result,
      };
    } catch (error: any) {
      console.log(error);
      return {
        message: "Não foi possível editar o serviço",
      };
    }
  }
}
