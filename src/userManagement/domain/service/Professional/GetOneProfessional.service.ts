import { Service } from "@interfaces";
import { ProfessionalDomain } from "../../Professional.domain";
import { ProfessionalRepository } from "src/userManagement/infra/repository/Professional.repository";
import { PrismaSingleton } from "@singletons";
import { ErrorHandler } from "@utils/ErrorHandler";
import { CustomError } from "src/_application/CustomError";

export class GetOneProfessionalService implements Service {
  async execute(idProfessional: string) {
    const professionalRepository = new ProfessionalRepository(
      PrismaSingleton.getPrismaClient()
    );

    const professional = await professionalRepository.getOne(idProfessional);

    if (!professional) {
      ErrorHandler.throwWithoutLog(
        new CustomError("Profissional não encontrado", 404)
      );
    }

    return professional;
  }
}
