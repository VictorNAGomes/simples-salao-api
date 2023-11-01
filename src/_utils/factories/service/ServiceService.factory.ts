import { UpdateServiceService } from "src/appointment/domain/service/Service/UpdateService.service";
import { ServiceRepositoryFactory } from "../repository/ServiceRepository.factory";
import { DeleteServiceService } from "src/appointment/domain/service/Service/DeleteService.service";

export class ServiceServiceFactory {
  static makeUpdateServiceService() {
    return new UpdateServiceService(ServiceRepositoryFactory.make());
  }
  static makeDeleteServiceService() {
    return new DeleteServiceService(ServiceRepositoryFactory.make());
  }
}
