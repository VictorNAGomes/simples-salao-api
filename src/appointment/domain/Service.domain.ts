export class ServiceDomain {
  idService!: string;
  name!: string;
  description!: string;
  valor!: number;
  duration!: string;

  constructor(service: {
    idService: string;
    name: string;
    description: string;
    valor: number;
    duration: string;
  }) {
    Object.assign(this, service);
  }
}
