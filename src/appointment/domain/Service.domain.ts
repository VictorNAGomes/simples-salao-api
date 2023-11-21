export class ServiceDomain {
  idService!: string;
  idCompany!: string;
  name!: string;
  description!: string;
  price!: number;
  duration!: number;

  constructor(service: {
    idService: string;
    name: string;
    description: string;
    price: number;
    duration: number;
    idCompany: string;
  }) {
    Object.assign(this, service);
  }

  static create(service: ServiceDomain): ServiceDomain {
    return new ServiceDomain(service)
  }
}
