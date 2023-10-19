import { Service } from "@interfaces";
import { PrismaSingleton } from "@singletons";
import { ErrorHandler } from "@utils/ErrorHandler";
import { CustomError } from "src/_application/CustomError";
import { ProfessionalRepository } from "src/userManagement/infra/repository/Professional.repository";
import { ProfessionalDomain } from "../../Professional.domain";
import { ProfessionalRepositoryFactory } from "@utils/factories/repository/ProfessionalRepository.factory";

export class UpdateProfessionalService implements Service {
  async execute(
    idProfessional: string,
    professionalData: Omit<
      Partial<ProfessionalDomain>,
      "idProfessional" | "idUser" | "password" | "email"
    >
  ) {
    const professionalRepository =
      ProfessionalRepositoryFactory.createProfessionalRepository();

    const professional = await professionalRepository.getOne(idProfessional);

    if (!professional) {
      ErrorHandler.throwWithoutLog(
        new CustomError("Profissional não encontrado", 404)
      );
      return;
    }

    const updatedProfessional = await professionalRepository.update(
      idProfessional,
      { ...professionalData, idUser: professional?.idUser }
    );

    if (!updatedProfessional) {
      ErrorHandler.throwWithoutLog(
        new CustomError("Erro ao atualizar profissional", 500)
      );
    }

    return updatedProfessional;
  }
}
