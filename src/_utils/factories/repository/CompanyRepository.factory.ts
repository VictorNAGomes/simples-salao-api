import { PrismaSingleton } from "@singletons";
import { CompanyOrmRepository } from "src/company/infra/repository/CompanyOrm.repository";

export class CompanyRepositoryFactory {
  static make() {
    return new CompanyOrmRepository(PrismaSingleton.getPrismaClient());
  }
}
