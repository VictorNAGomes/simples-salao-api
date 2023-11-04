import { ServiceDomain } from "src/appointment/domain/Service.domain";

export interface UpdateServiceDto
  extends Partial<Omit<ServiceDomain, "idService">> {}
