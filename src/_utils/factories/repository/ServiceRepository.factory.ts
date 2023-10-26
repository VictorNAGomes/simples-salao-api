import { ServiceRepository } from "src/appointment/infra/repository/ServiceOrm.repository";

export class ServiceRepositoryFactory {
  static create() {
    return new ServiceRepository();
  }
}
