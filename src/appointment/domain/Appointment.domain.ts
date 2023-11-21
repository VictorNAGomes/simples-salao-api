import { ClientDomain, ProfessionalDomain } from "src/userManagement/domain";
import { ServiceDomain } from "./Service.domain";

export class AppointmentDomain {
  idAppointment!: string;
  idService!: string;
  idClient!: string;
  idProfessional!: string;

  date!: Date;
  approved!: boolean;
  createdByProfessional!: boolean;

  constructor(appointment: AppointmentDomain) {
    Object.assign(this, appointment);
  }

  static create(service: AppointmentDomain): AppointmentDomain {
    return new AppointmentDomain(service);
  }
}
