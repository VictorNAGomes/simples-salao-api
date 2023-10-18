import { ProfessionalRepository } from "../../../userManagement/infra/repository/Professional.repository";
import { PrismaSingleton } from "../../singletons/Prisma.singleton";

export class ProfessionalRepositoryFactory {
  static createProfessionalRepository() {
    return new ProfessionalRepository(PrismaSingleton.getPrismaClient());
  }
}
