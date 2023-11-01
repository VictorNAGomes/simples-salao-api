import { UpdateServiceService } from "src/appointment/domain/service/Service/UpdateService.service";
import { ServiceRepositoryFactory } from "../repository/ServiceRepository.factory";

export class ServiceServiceFactory {
  static makeUpdateServiceService() {
    return new UpdateServiceService(ServiceRepositoryFactory.make());
  }
}
