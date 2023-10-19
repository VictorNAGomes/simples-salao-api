import { Service } from "@interfaces";
import { ErrorHandler } from "@utils/ErrorHandler";
import { CustomError } from "src/_application/CustomError";
import { ProfessionalRepository } from "src/userManagement/infra/repository/Professional.repository";

export class DeleteProfessionalService implements Service {
  constructor(private professionalRepository: ProfessionalRepository) {
    this.professionalRepository = professionalRepository;
  }
  async execute(idProfessional: string) {
    const userExists = await this.professionalRepository.delete(idProfessional);

    if (!userExists)
      ErrorHandler.throwWithLog(
        new CustomError("Profissional não encontrado", 404)
      );

    const userDeleted = await this.professionalRepository.delete(
      idProfessional
    );
    if (!userDeleted)
      ErrorHandler.throwWithLog(
        new CustomError("Erro ao deletar profissional", 500)
      );

    return { idProfessional: userDeleted?.idProfessional };
  }
}
