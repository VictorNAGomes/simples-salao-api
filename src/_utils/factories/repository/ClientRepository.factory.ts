import { ClientRepository } from "../../../userManagement/infra/repository/Client.repository";
import { PrismaSingleton } from "../../singletons/Prisma.singleton";

export class ClientRepositoryFactory {
  static createClientRepository() {
    return new ClientRepository(PrismaSingleton.getPrismaClient());
  }
}
