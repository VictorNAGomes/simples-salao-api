import { AppointmentDomain } from "src/appointment/domain/Appointment.domain";

export class AppointmentRepository {
  create(
    appointmentDomain: Omit<AppointmentDomain, "idAppointment" | "service">
  ): Promise<Omit<AppointmentDomain, "service"> | null>;

  getAll(): Promise<AppointmentDomain[] | null>;
}
