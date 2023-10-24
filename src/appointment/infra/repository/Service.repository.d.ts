import { ServiceDomain } from "src/appointment/domain/Service.domain";

export interface ServiceRepository {
  create(service: Omit<ServiceDomain, "idService">): Promise<ServiceDomain>;
}
