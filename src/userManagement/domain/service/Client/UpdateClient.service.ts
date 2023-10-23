import { Service } from "@interfaces";
import { ErrorHandler } from "@utils/ErrorHandler";
import { CustomError } from "src/_application/CustomError";
import { ClientDomain } from "../../Client.domain";
import { ClientRepositoryFactory } from "@utils/factories/repository/ClientRepository.factory";

export class UpdateClientService implements Service {
  async execute(
    idClient: string,
    clientData: Omit<
      Partial<ClientDomain>,
      "idClient" | "idUser" | "password" | "email"
    >
  ) {
    const clientRepository =
      ClientRepositoryFactory.createClientRepository();

    const client = await clientRepository.getOne(idClient);

    if (!client) {
      ErrorHandler.throwWithoutLog(
        new CustomError("Cliente não encontrado", 404)
      );
      return;
    }

    const updatedClient = await clientRepository.update(
      idClient,
      { ...clientData, idUser: client?.idUser }
    );

    if (!updatedClient) {
      ErrorHandler.throwWithoutLog(
        new CustomError("Erro ao atualizar cliente", 500)
      );
    }

    return updatedClient;
  }
}
