import { Service } from "@interfaces";
import { ClientRepository } from "src/userManagement/infra/repository/Client.repository";
import { PrismaSingleton } from "@singletons";
import { ErrorHandler } from "@utils/ErrorHandler";
import { CustomError } from "src/_application/CustomError";

export class GetOneClientService implements Service {
  async execute(idClient: string) {
    const clientRepository = new ClientRepository(
      PrismaSingleton.getPrismaClient()
    );

    const client = await clientRepository.getOne(idClient);

    if (!client) {
      ErrorHandler.throwWithoutLog(
        new CustomError("Cliente não encontrado", 404)
      );
    }

    return client;
  }
}
