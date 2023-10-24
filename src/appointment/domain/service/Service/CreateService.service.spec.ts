import { Service } from "@interfaces";
import { ServiceDomain } from "../../Service.domain";
import { ServiceRepository } from "src/appointment/infra/repository/ServiceOrm.repository";


export class CreateService implements Service {
  constructor(private serviceRepository: ServiceRepository) {}
  execute(service: ServiceDomain) {
    this.serviceRepository.create(service);
  }
}
