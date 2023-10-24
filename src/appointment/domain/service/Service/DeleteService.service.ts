import { Service } from "@interfaces";
import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";

export class DeleteServiceService implements Service {
  constructor(private readonly serviceRepository: ServiceRepository) {}

  async execute(idService: string) {
    try {
      const result = await this.serviceRepository.delete(idService);

      return {
        message: "Serviço excluído com sucesso",
      };
    } catch (error: any) {
      if (error.message === "Service not found") {
        return {
          message: "Serviço não encontrado",
        };
      }
      return {
        message: "Não foi possível excluir o serviço",
      };
    }
  }
}
