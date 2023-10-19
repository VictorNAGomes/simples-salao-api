import { Service } from "@interfaces";
import { PrismaSingleton } from "@singletons";
import { ErrorHandler } from "@utils/ErrorHandler";
import { CustomError } from "src/_application/CustomError";
import { ProfessionalRepository } from "src/userManagement/infra/repository/Professional.repository";

export class GetAllProfessionalsService implements Service {
  async execute(filters: { name?: string }) {
    const professionalRepository = new ProfessionalRepository(
      PrismaSingleton.getPrismaClient()
    );

    const result = await professionalRepository.getAll(filters);
    if (result.length === 0)
      ErrorHandler.throwWithoutLog(
        new CustomError("Nenhum profissional encontrado", 404)
      );

    return result;
  }
}
