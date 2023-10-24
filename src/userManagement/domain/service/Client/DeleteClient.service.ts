import { Service } from "@interfaces";
import { ErrorHandler } from "@utils/ErrorHandler";
import { CustomError } from "src/_application/CustomError";
import { ClientRepository } from "src/userManagement/infra/repository/Client.repository";

export class DeleteClientService implements Service {
  constructor(private clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }
  async execute(idClient: string) {
    const userExists = await this.clientRepository.delete(idClient);

    if (!userExists)
      ErrorHandler.throwWithLog(
        new CustomError("Cliente não encontrado", 404)
      );

    const userDeleted = await this.clientRepository.delete(
      idClient
    );
    if (!userDeleted)
      ErrorHandler.throwWithLog(
        new CustomError("Erro ao deletar cliente", 500)
      );

    return { idClient: userDeleted?.idClient };
  }
}
