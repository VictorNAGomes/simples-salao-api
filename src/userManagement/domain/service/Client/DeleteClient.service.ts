import { Service } from "@interfaces";
import { ErrorHandler } from "@utils/ErrorHandler";
import { ClientRepositoryFactory } from "@utils/factories/repository/ClientRepository.factory";
import { CustomError } from "src/_application/CustomError";

export class DeleteClientService implements Service {
  constructor() {}
  async execute(idClient: string) {
    const clientRepository =
      ClientRepositoryFactory.createClientRepository();
    const userExists = await clientRepository.getOne(idClient);

    if (!userExists)
      new CustomError("Cliente não encontrado", 404)

    const userDeleted = await clientRepository.delete(
      idClient
    );
    if (!userDeleted)
      ErrorHandler.throwWithLog(
        new CustomError("Erro ao deletar cliente", 500)
      );

    return { idClient: userDeleted?.idClient };
  }
}
