import { ServiceDomain } from "src/appointment/domain/Service.domain";

export interface ServiceRepository {
  create(service: Omit<ServiceDomain, "idService">): Promise<ServiceDomain>;
  getAll(): Promise<ServiceDomain[]>;
  delete(idService: string): Promise<void>;
}
