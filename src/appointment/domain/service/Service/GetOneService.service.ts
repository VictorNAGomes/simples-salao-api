import { Service } from "@interfaces";
import { ServiceRepository } from "src/appointment/infra/repository/Service.repository";

export class GetOneServiceService implements Service {
  constructor(private readonly serviceRepository: ServiceRepository) {}
  async execute(idService: string) {
    try {
      const result = await this.serviceRepository.getOne(idService);
      if (!result) {
        return {
          message: "Serviço não encontrado",
          result,
        };
      }

      return {
        message: "Serviço encontrado com sucesso",
        result,
      };
    } catch (error) {
      return {
        message: "Algum erro inesperado ocorreu",
      };
    }
  }
}
