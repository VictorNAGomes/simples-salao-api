import { ClientDomain } from "src/userManagement/domain";
import { ServiceDomain } from "./Service.domain";

export class AppointmentDomain {
  idAppointment!: string;
  ammount!: number;
  idService!: string;
  service!: ServiceDomain
  idClient!: string;
  client!: ClientDomain;
  

  constructor(appointment: { idAppointment: string }) {
    Object.assign(this, appointment);
  }

  static create(service: AppointmentDomain): AppointmentDomain {
    return new AppointmentDomain(service);
  }
}
