import { Service } from "@interfaces";
import { PrismaSingleton } from "@singletons";
import { ErrorHandler } from "@utils/ErrorHandler";
import { CustomError } from "src/_application/CustomError";
import { ClientRepository } from "src/userManagement/infra/repository/Client.repository";

export class GetAllClientsService implements Service {
  async execute(filters: { name?: string }) {
    const clientRepository = new ClientRepository(
      PrismaSingleton.getPrismaClient()
    );

    const result = await clientRepository.getAll(filters);
    if (result.length === 0)
      ErrorHandler.throwWithoutLog(
        new CustomError("Nenhum profissional encontrado", 404)
      );

    return result;
  }
}
