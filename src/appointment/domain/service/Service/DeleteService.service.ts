import { Service } from "@interfaces";
import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";

export class DeleteServiceService implements Service {
  constructor(private readonly serviceRepository: ServiceRepository) {}

  async execute(idService: string) {
    try {
      await this.serviceRepository.delete(idService);

      return {
        message: "Serviço excluído com sucesso",
      };
    } catch (error: any) {
      if (error.code === "P2025") {
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
