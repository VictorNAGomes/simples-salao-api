import { PrismaSingleton } from "@singletons";
import { ServiceOrmRepository } from "src/appointment/infra/repository/ServiceOrm.repository";

export class ServiceRepositoryFactory {
  static make() {
    return new ServiceOrmRepository(PrismaSingleton.getPrismaClient());
  }
}
