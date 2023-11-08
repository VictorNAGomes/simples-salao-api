import { AppointmentDomain } from "src/appointment/domain/Appointment.domain";

export class AppointmentRepository {
  create(
    appointmentDomain: Omit<AppointmentDomain, "idAppointment">
  ): Promise<AppointmentDomain | null>;
}
