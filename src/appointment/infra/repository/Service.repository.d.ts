import { ServiceDomain } from "src/appointment/domain/Service.domain";

export class ServiceRepository {
  create(service: Omit<ServiceDomain, "idService">): Promise<ServiceDomain>;
  getAll(): Promise<ServiceDomain[]>
}
