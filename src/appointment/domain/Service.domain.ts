export class ServiceDomain {
  idService!: string;
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
  }) {
    Object.assign(this, service);
  }

  static create(service: ServiceDomain): ServiceDomain {
    return new ServiceDomain(service)
  }
}
