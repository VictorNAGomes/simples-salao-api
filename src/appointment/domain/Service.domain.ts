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
}
