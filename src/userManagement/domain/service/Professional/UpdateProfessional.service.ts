import { Service } from "@interfaces";
import { PrismaSingleton } from "@singletons";
import { ErrorHandler } from "@utils/ErrorHandler";
import { CustomError } from "src/_application/CustomError";
import { ProfessionalRepository } from "src/userManagement/infra/repository/Professional.repository";
import { ProfessionalDomain } from "../../Professional.domain";

export class UpdateProfessionalService implements Service {
  async execute(
    idProfessional: string,
    professionalData: Omit<
      Partial<ProfessionalDomain>,
      "idProfessional" | "idUser" | "password" | "email"
    >
  ) {
    if (!professionalData) {
      ErrorHandler.throwWithoutLog(
        new CustomError("Dados do profissional não informados", 400)
      );
    }

    const professionalRepository = new ProfessionalRepository(
      PrismaSingleton.getPrismaClient()
    );

    const professionalExists = await professionalRepository.getOne(
      idProfessional
    );

    if (professionalExists) {
      ErrorHandler.throwWithoutLog(
        new CustomError("Profissional não encontrado", 404)
      );
    }

    const updatedProfessional = await professionalRepository.update(
      idProfessional,
      { ...professionalData, idUser: professionalExists?.idUser }
    );

    if (!updatedProfessional) {
      ErrorHandler.throwWithoutLog(
        new CustomError("Erro ao atualizar profissional", 500)
      );
    }

    return updatedProfessional;
  }
}
