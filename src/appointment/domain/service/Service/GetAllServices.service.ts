import { Service } from "@interfaces";
import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";

export class GetAllServicesService implements Service {
  serviceRepository: ServiceRepository;
  constructor(serviceRepository: ServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  async execute() {
    try {
      const result = await this.serviceRepository.getAll();
      
      if (!result) {
        return {
          message: "Nenhum serviço encontrado",
          result: [],
        };
      }

      return {
        message: "Serviços listados com sucesso",
        result,
      };
    } catch (error: any) {
      
      throw new Error("Não foi possível listar os usuários");
    }
  }
}
